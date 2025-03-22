import React, { useState, useEffect } from "react";
import { conjunctionsData } from "../data/conjunctions";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box, CircularProgress, TextField, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { Card, CardContent, Typography } from "@mui/material";

//JSX DOSYASINDAN AXİOS VEYA FETCH İLE VERİ ÇEKMEK YERİNE KENDİSİNİ İMPORT EDİP KULLANMAK DAHA MANTIKLI OLUP İLLEDE VERİYİ FETCH YADA AXİOS İLE ÇEKECEĞİM DERSEN DOSYALARINI JSON FORMATINDA AYARLA...

function Conjunctions() {
  const [searchTerm, setSearchTerm] = useState(""); //input alanı
  const [results, setResults] = useState([]); //inputtan alınan bağlaca bağlı olarak gelen sonuçlar dizisi
  const [loading, setLoading] = useState(false); //loading animasyonu
  const [visibleResults, setVisibleResults] = useState(3); // ekranda görünecek örnek sayısı inputtan veri alındığında ve başlangıçta bu değer 3 olsun istedik
  const [initialExample, setInitialExample] = useState(null); //ilgili sekme açıldığında kişiye gösterilecek örnek bağlaç ki bu useEffect ile tetiklenen yazmış olduğumuz fetchRandomConjunction(); ile geliyor
  const [searched, setSearched] = useState(false); //arama butonuna basıldı mı basılmadı mı kontrol ederek aranan bağlaç varsa örneklerini ekrana göstermek; aranan bağlaç yoksa hata mesajını vermek oldu

  useEffect(() => {
    setSearchTerm("")
    fetchRandomConjunction();
  }, []);

  // Arama butonuna basıldıdğında ekranda görünecek örnek sayısı 4 adet yaptık ilk sefer için bu useEffect ile
  useEffect(() => {
    setVisibleResults(3);
  }, [searchTerm]);

  const fetchRandomConjunction = () => {
    setSearchTerm("")
    setLoading(true);
    setResults([]);
    setSearched(false);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * conjunctionsData.length);
      setInitialExample(conjunctionsData[randomIndex]);
      setLoading(false);
    }, 1000);
  };

  const handleSearch = () => {
    setLoading(true);
    setInitialExample(null);
    setResults([]);
    setSearched(true);
    setTimeout(() => {
      const exactMatches = conjunctionsData.filter(
        (item) =>
          item.conjunction.toLowerCase() === searchTerm.toLowerCase()
      );

      // Sonuçları karıştırdık yapay zeka ile leveller karışık gözüksün diye
      const shuffledResults = exactMatches.sort(() => Math.random() - 0.5);
      setResults(shuffledResults);
      setLoading(false);
    }, 1000);
  };

  const handleShowMore = () => {
    setVisibleResults((prev) => prev + 3); // Daha fazla göster ile ekrana 4 fazla sonuç ekledik
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <TextField
          label="Lütfen bir bağlaç giriniz - Please enter a conjunction"
          variant="filled"
          fullWidth
          color="secondary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ marginBottom: 3 }}
        />
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <Button variant="outlined" fullWidth endIcon={<LocalLibraryIcon />} onClick={fetchRandomConjunction}>
            Random Example
          </Button>
          <Button variant="contained" fullWidth endIcon={<SendIcon />} onClick={handleSearch}>
            Search
          </Button>
        </Stack>
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <>
          {initialExample && (
            <Box sx={{ maxWidth: 800, margin: "0 auto", marginBottom: 4 }}>
              <Card sx={{ border: "3px solid #4F46E5", textAlign: "center", padding: 2, marginBottom: 3 }}>
                <CardContent>
                  <Typography sx={{ color: "#5746E5", fontSize: "xx-large", fontWeight: "bold" }}>
                    {initialExample.conjunction.toUpperCase()} - {initialExample.turkish.toLocaleUpperCase('TR')}
                  </Typography>
                  <Typography sx={{ color: "firebrick", fontSize: "x-large" }}>
                    (Difficulty : {initialExample.level} Level)
                  </Typography>
                  <Typography sx={{ color: "#8C85FF", fontSize: "xx-large", fontWeight: "bold", marginTop: 2 }}>
                    {initialExample.example}
                  </Typography>
                  <Typography sx={{ color: "#E5464F", fontSize: "x-large" }}>
                    ({initialExample.turkishMeaning})
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          )}

          {searched && results.length > 0 && (
            <Box sx={{ maxWidth: 1200, margin: "0 auto", padding: 2 }}>
              <Grid container spacing={3} justifyContent="center">
                {results.slice(0, visibleResults).map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index} marginBottom={4}>
                    <Card
                      sx={{
                        border: "3px solid #4F46E5",
                        textAlign: "center",
                        padding: 2,
                        height: "100%",
                        marginBottom: 3,
                      }}
                    >
                      <CardContent>
                        <Typography sx={{ color: "#5746E5", fontSize: "xx-large", fontWeight: "bold" }}>
                          {item.conjunction.toUpperCase()} - {item.turkish.toLocaleUpperCase('TR')}
                        </Typography>
                        <Typography sx={{ color: "firebrick", fontSize: "x-large" }}>
                          (Difficulty : {item.level} Level)
                        </Typography>
                        <Typography sx={{ color: "#8C85FF", fontSize: "xx-large", fontWeight: "bold", marginTop: 2 }}>
                          {item.example}
                        </Typography>
                        <Typography sx={{ color: "#E5464F", fontSize: "x-large" }}>
                          ({item.turkishMeaning})
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {searched && results.length === 0 && !loading && (
            <Typography sx={{ color: "red", fontSize: "large", fontWeight: "bold", textAlign: "center", marginTop: 4 }}>
              Sonuç Bulunamadı - Not Found
            </Typography>
          )}

          {searched && results.length > visibleResults && (
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
              <Button onClick={handleShowMore} variant="outlined">
                Daha Fazla Göster
              </Button>
            </Box>
          )}
        </>
      )}
    </Box>
  );
}

export default Conjunctions;