import React, { useState, useEffect } from "react";
import { phrasalVerbs } from '../data/verbs'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, CircularProgress, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { Card, CardContent, Typography } from "@mui/material";

function PhrasalVerbs() {
  const [searchTerm, setSearchTerm] = useState(""); //input alanı
  const [results, setResults] = useState([]); //inputtan alınan bağlaca bağlı olarak gelen sonuçlar dizisi
  const [loading, setLoading] = useState(false); //loading animasyonu
  const [initialExample, setInitialExample] = useState(null); //ilgili sekme açıldığında kişiye gösterilecek örnek bağlaç ki bu useEffect ile tetiklenen yazmış olduğumuz fetchRandomConjunction(); ile geliyor
  const [searched, setSearched] = useState(false); //arama butonuna basıldı mı basılmadı mı kontrol ederek aranan bağlaç varsa örneklerini ekrana göstermek; aranan bağlaç yoksa hata mesajını vermek oldu

  useEffect(() => {
    setSearchTerm("")
    fetchRandomConjunction();
  }, []);

  const fetchRandomConjunction = () => {
    setSearchTerm("")
    setLoading(true);
    setResults([]);
    setSearched(false);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * phrasalVerbs.length);
      setInitialExample(phrasalVerbs[randomIndex]);
      setLoading(false);
    }, 1000);
  };

  const handleSearch = () => {
    setLoading(true);
    setInitialExample(null);
    setResults([]);
    setSearched(true);
    setTimeout(() => {
      const exactMatches = phrasalVerbs.filter(
        (item) =>
          item.phrasalVerb.toLowerCase() === searchTerm.toLowerCase()
      );
      setResults(exactMatches);
      setLoading(false);
      setSearchTerm("")
    }, 1000);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <TextField
          label="Lütfen bir fiil giriniz - Please enter a fiil"
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
                  <Typography sx={{ color: "#5746E5", fontSize: "xx-large" }}>
                    {initialExample.phrasalVerb}
                  </Typography>
                  <Typography sx={{ color: "firebrick", fontSize: "x-large" }}>
                    {initialExample.meaning}
                  </Typography>
                 <Typography sx={{ color: "#8C85FF", fontSize: "x-large" }}>
                    {initialExample.examples[0]}
                  </Typography>
                  <Typography sx={{ color: "#E5464F", fontSize: "large" }}>
                    {initialExample.turkishSentences[0]}
                  </Typography>
                  <Typography sx={{ color: "#8C85FF", fontSize: "x-large" }}>
                    {initialExample.examples[1]}
                  </Typography>
                  <Typography sx={{ color: "#E5464F", fontSize: "large" }}>
                    {initialExample.turkishSentences[1]}
                  </Typography>
                  <Typography sx={{ color: "#8C85FF", fontSize: "x-large" }}>
                    {initialExample.examples[2]}
                  </Typography>
                  <Typography sx={{ color: "#E5464F", fontSize: "large" }}>
                    {initialExample.turkishSentences[2]}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          )}

          {searched && results.length > 0 && (
            <Box sx={{ maxWidth: 800, margin: "0 auto", marginBottom: 4 }}>
              {results.map((item, index) => (
                <Card sx={{ border: "3px solid #4F46E5", textAlign: "center", padding: 2, marginBottom: 3 }} key={index}>
                  <CardContent>
                    <Typography sx={{ color: "#5746E5", fontSize: "xx-large" }}>
                      {item.phrasalVerb}
                    </Typography>
                    <Typography sx={{ color: "firebrick", fontSize: "x-large" }}>
                      {item.meaning}
                    </Typography>
                   <Typography sx={{ color: "#8C85FF", fontSize: "x-large" }}>
                      {item.examples[0]}
                    </Typography>
                    <Typography sx={{ color: "#E5464F", fontSize: "large" }}>
                      {item.turkishSentences[0]}
                    </Typography>
                    <Typography sx={{ color: "#8C85FF", fontSize: "x-large" }}>
                      {item.examples[1]}
                    </Typography>
                    <Typography sx={{ color: "#E5464F", fontSize: "large" }}>
                      {item.turkishSentences[1]}
                    </Typography>
                    <Typography sx={{ color: "#8C85FF", fontSize: "x-large" }}>
                      {item.examples[2]}
                    </Typography>
                    <Typography sx={{ color: "#E5464F", fontSize: "large" }}>
                      {item.turkishSentences[2]}
                    </Typography>

                  </CardContent>
                </Card>
              ))}
            </Box>
          )}

          {searched && results.length === 0 && !loading && (
            <Typography sx={{ color: "red", fontSize: "xx-large", fontWeight: "bold", textAlign: "center", marginTop: 4 }}>
              Sonuç Bulunamadı - Not Found
            </Typography>
          )}

        </>
      )}
    </Box>
  );
}

export default PhrasalVerbs

