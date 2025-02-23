import React from 'react'
import {Box,Container,styled,Typography} from "@mui/material"
import { Data } from '../../StaticData/Data'
import CustomCard from '../../components/CustomCard/CustomCard'
const Dishes = () => {
  
  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign:"center"
    },
  }));

  const DishesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginTop:theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection:"column",
      alignItems:"center"
    },
  }));
  return (
    <Box sx={{mt:5,backgroundColor:"#f5fafe",py:10}}>
      <Container>
        <PropertiesTextBox>
          <Typography
          sx={{color:"#5a6473",fontSize:"16px",mt:1,ml:"13px"}}>
            Explore variety of burgers and other dishes

          </Typography>
        </PropertiesTextBox>
        <DishesBox>
          {Data.map((foodItem)=>(
            <CustomCard
            key={foodItem.id}
            img={foodItem.img}
            price={foodItem.price}
            items={foodItem.item}
            likes={foodItem.likes}
            heart={foodItem.heart}
            share={foodItem.share}
            />
          ))}
        </DishesBox>
      </Container>

    </Box>

  )
}

export default Dishes