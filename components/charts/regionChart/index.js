
import React, { useEffect } from 'react'
import CustomCard from '../../CustomComponents/CustomCard'
import { CardContent, Box, Button, Typography, CardHeader } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'
import countries from "../regionChart/world_countries.json"
import { scaleQuantize } from "d3-scale";






function RegionChart(props) {

    useEffect(()=>{

        


    },[])
    


  const getColor = scaleQuantize().domain([1]).range(["#ededed", "#91A5FF"]);
  return (
    <CustomCard>
        <CardHeader
            title="Re"
            subheader="Ssas"
        />
        
        
        <CardContent>
       <Box sx={{height:"250px"}}>
       <ResponsiveChoropleth
        data={[
            {
            id: "CHN",
                value: 260808
            },
           {
            id: "CHL",
            value: 883340
          },
          {
            id: "IND",
            value: 883340
          },
    
    ]}
        features={countries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors={getColor}
        domain={[0, 1]}
        unknownColor="#ededed"
        valueFormat=".2s"
        projectionScale={130}
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#ffffff"
        borderWidth={"0.5px"}
        onClick={(e)=>{ console.log(e)}}
        borderColor={{ theme: "background" }}
        tooltip={(data, color) => (
          <div
            style={{
              padding: 12,
              color,
              background: "#ffffff"
            }}
          >
            <br />
            <strong>
              <span>{data.feature.properties.name}</span>
            </strong>
            <br />
            <strong>
              {data.feature.id}: {data.feature.value}
            </strong>
          </div>
        )}
      />
        

        </Box>
        
    </CardContent>
    </CustomCard>
  )
}

export default RegionChart