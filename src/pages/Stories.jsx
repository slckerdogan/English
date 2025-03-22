import React, { useState } from "react";
import { Card, CardContent, Typography, Pagination, Box, Button, Grid } from "@mui/material";
import { storiesByLevels } from '../data/story';

const levelNames = ["A1", "A2", "B1", "B2", "C1", "C2"]; // Buton isimleri

const itemsPerPage = 4; // Her sayfada kaç story gösterilecek

function Stories() {
  const [activeGroup, setActiveGroup] = useState(0); // Hangi grup aktif?
  const [page, setPage] = useState(1); // Aktif sayfa
  const [expanded, setExpanded] = useState({}); // Hikayelerin genişletme durumu

  const currentData = storiesByLevels[activeGroup].slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const resetExpanded = () => {
    setExpanded({});
  };

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Box sx={{ textAlign: "center", p: 2, display: "flex", flexDirection: "column", alignItems: "center", minHeight: "80vh" }}>
      {/* Butonlar */}
      <Grid container spacing={1} justifyContent="center" sx={{ mb: 3 }}>
        {levelNames.map((level, index) => (
          <Grid item key={index}>
            <Button
              variant="contained"
              onClick={() => {
                setActiveGroup(index);
                setPage(1); // Sayfayı sıfırla
                resetExpanded(); // Read More durumlarını sıfırla
              }}
              sx={{
                width: "200px",
                height: "50px",
                backgroundColor: activeGroup === index ? "#4F46E5" : "lightgray",
                color: activeGroup === index ? "white" : "black",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: activeGroup === index ? "darkblue" : "gray"
                }
              }}
            >
              {level}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Seçilen grubun hikayeleri */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
        {currentData.map((item, index) => (
          <Card key={index} sx={{ width: "90%", maxWidth: 600, mx: "auto", mb: 2, p: 2 }}>
            <CardContent>
              <Typography sx={{ fontSize: "x-large", fontWeight: "bold", color:"#5746E5" }}>{item.title}</Typography>
              <Typography sx={{ color: "black", fontSize: "large", fontWeight: "bold", color: "#8C85FF" }}>Summary: {item.summary}</Typography>
              <Typography sx={{ color: "#E5464F", fontSize: "large", fontWeight: "bold" }}>   
                Story: {expanded[index] ? item.story : item.story.slice(0, 100) + "..."}
              </Typography>
              <Button variant="outlined"
              onClick={() => toggleReadMore(index)} sx={{ mt: 1, width: "200px",
                height: "50px",
                transition: "all 0.3s ease-in-out", backgroundColor: "lightgray", color:"black" , fontWeight:"bold", borderRadius:"25px"}}>
                {expanded[index] ? "Read Less" : "Read More"}
              </Button>
            </CardContent>
          </Card>
        ))}

        {/* Pagination Bileşeni */}
        <Box sx={{ mt: 2, pb: 3 }}>
          <Pagination
            count={Math.ceil(storiesByLevels[activeGroup].length / itemsPerPage)}
            page={page}
            onChange={(event, value) => {
              setPage(value);
              resetExpanded(); // Sayfa değiştiğinde Read More durumlarını sıfırla
            }}
            color="primary"
            size="large"
          />
        </Box>
      </Box>
    </Box>
  );
}
export default Stories;