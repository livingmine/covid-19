import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Counter from "../components/counter";
import Wrapper from "../components/wrapper";
import Badge from "../components/badge";
import Card from "../components/card";

function IndexPage() {
  // Client-side Runtime Data Fetching
  const [cases, setCases] = useState({
    'treated': {
      'cumulative': 0,
      'today': 0,
      'percentageIncrease': 0,
      'min': 0,
      'max': 0,
      'historical': []
    },
    'dead': {
      'cumulative': 0,
      'today': 0,
      'percentageIncrease': 0,
      'min': 0,
      'max': 0,
      'historical': []
    },
    'recovered': {
      'cumulative': 0,
      'today': 0,
      'percentageIncrease': 0,
      'min': 0,
      'max': 0,
      'historical': []
    }
  });
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/Statistik_Perkembangan_COVID19_Indonesia/FeatureServer/0/query?f=json&where=Tanggal%3Ctimestamp%20%272020-03-28%2017%3A00%3A00%27&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Tanggal%20asc&resultOffset=0&resultRecordCount=2000&cacheHint=true`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        const features = resultData.features
          .filter(feature => feature.Jumlah_Kasus_Kumulatif !== null)
          .map(feature => ({
            ...feature.attributes
          }));

        const todayFeature = features[features.length - 1];

        setCases({
          'treated': {
            'cumulative': todayFeature['Jumlah_pasien_dalam_perawatan'],
            'today': todayFeature['Jumlah_Kasus_Dirawat_per_Hari'],
            'percentageIncrease': Math.round(
              ((todayFeature['Jumlah_Kasus_Dirawat_per_Hari'] / (todayFeature['Jumlah_pasien_dalam_perawatan'] - todayFeature['Jumlah_Kasus_Dirawat_per_Hari']) * 100) + Number.EPSILON)
              * 100
            ) / 100,
            'min': Math.min(...features.map(feature => feature.Jumlah_pasien_dalam_perawatan)),
            'max': Math.max(...features.map(feature => feature.Jumlah_pasien_dalam_perawatan)),
            'historical': [['kasus', 'kasus', {'type': 'string', 'role': 'style'}]].concat(
              features.map((feature, index, array) => 
                index === array.length - 1 ?
                  [index, feature.Jumlah_pasien_dalam_perawatan, 'point { size: 4; shape-type: circle; fill-color: #a52714; }'] :
                  [index, feature.Jumlah_pasien_dalam_perawatan, null]
              )
            )
          },
          'dead': {
            'cumulative': todayFeature['Jumlah_Pasien_Meninggal'],
            'today': todayFeature['Jumlah_Kasus_Meninggal_per_Hari'],
            'percentageIncrease': Math.round(
              ((todayFeature['Jumlah_Kasus_Meninggal_per_Hari'] / (todayFeature['Jumlah_Pasien_Meninggal'] - todayFeature['Jumlah_Kasus_Meninggal_per_Hari']) * 100) + Number.EPSILON)
              * 100
            ) / 100,
            'min': Math.min(...features.map(feature => feature.Jumlah_Pasien_Meninggal)),
            'max': Math.max(...features.map(feature => feature.Jumlah_Pasien_Meninggal)),
            'historical': [['kasus', 'kasus', {'type': 'string', 'role': 'style'}]].concat(
              features.map((feature, index, array) =>
                index === array.length - 1 ?
                  [index, feature.Jumlah_Pasien_Meninggal, 'point { size: 4; shape-type: circle; fill-color: #a52714; }'] :
                  [index, feature.Jumlah_Pasien_Meninggal, null]
              )
            )
          },
          'recovered': {
            'cumulative': todayFeature['Jumlah_Pasien_Sembuh'],
            'today': todayFeature['Jumlah_Kasus_Sembuh_per_Hari'],
            'percentageIncrease': Math.round(
              ((todayFeature['Jumlah_Kasus_Sembuh_per_Hari'] / (todayFeature['Jumlah_Pasien_Sembuh'] - todayFeature['Jumlah_Kasus_Sembuh_per_Hari']) * 100) + Number.EPSILON)
              * 100
            ) / 100,
            'min': Math.min(...features.map(feature => feature.Jumlah_Pasien_Sembuh)),
            'max': Math.max(...features.map(feature => feature.Jumlah_Pasien_Sembuh)),
            'historical': [['kasus', 'kasus', {'type': 'string', 'role': 'style'}]].concat(
              features.map((feature, index, array) => 
              index === array.length - 1 ?
                [index, feature.Jumlah_Pasien_Sembuh, 'point { size: 4; shape-type: circle; fill-color: #a52714; }'] :
                [index, feature.Jumlah_Pasien_Sembuh, null]
              )
            )
          },
        })
      }) // set data for the number of stars
  }, [])

  console.log(cases);

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Counter />
      <Wrapper>
        <Card cardTitle="Dirawat" casesCumulative={cases.treated.cumulative}>
          <Badge
            badgeBgColor="bg-red-100"
            borderColor="border-red-400"
            iconColor="text-red-500"
            caseNumber={cases.treated.today}
            casePercentage={cases.treated.percentageIncrease}
          />
          <Chart
            className='h-16'
            chartType="LineChart"
            loader={<div>Sedang mempersiapkan grafik</div>}
            data={
              cases.treated.historical
            }
            chartEvents={[
              {
                eventName: 'ready',
                callback: ({ chartWrapper }) => {
                  chartWrapper.getChart().setSelection(
                    [{ row: cases.treated.historical.length - 2, column: 1 }]
                  );
                }
              }
            ]}
            options={{
              legend: 'none',
              curveType: 'function',
              pointSize: 0.1,
              hAxis: {
                baselineColor: 'white',
                gridlines: {
                  color: 'white'
                },
              },
              vAxis: {
                baselineColor: 'white',
                gridlines: {
                  color: 'white'
                },
                viewWindow: {
                  'min': cases.treated.min,
                  'max': cases.treated.max,
                }
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </Card>
        <Card cardTitle="Sembuh" casesCumulative={cases.recovered.cumulative}>
          <Badge
            badgeBgColor="bg-green-100"
            borderColor="border-green-400"
            iconColor="text-green-500"
            caseNumber={cases.recovered.today}
            casePercentage={cases.recovered.percentageIncrease}
          />
          <Chart
            className='h-16'
            chartType="LineChart"
            loader={<div>Sedang mempersiapkan grafik</div>}
            data={
              cases.recovered.historical
            }
            chartEvents={[
              {
                eventName: 'ready',
                callback: ({ chartWrapper }) => {
                  chartWrapper.getChart().setSelection(
                    [{ row: cases.recovered.historical.length - 2, column: 1 }]
                  );
                }
              }
            ]}
            options={{
              legend: 'none',
              curveType: 'function',
              pointSize: 0.1,
              hAxis: {
                baselineColor: 'white',
                gridlines: {
                  color: 'white'
                },
              },
              vAxis: {
                baselineColor: 'white',
                gridlines: {
                  color: 'white'
                },
                viewWindow: {
                  min: cases.recovered.min,
                  max: cases.recovered.max
                }
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </Card>
        <Card cardTitle="Meninggal" casesCumulative={cases.dead.cumulative}>
          <Badge
            badgeBgColor="bg-red-100"
            borderColor="border-red-400"
            iconColor="text-red-500"
            caseNumber={cases.dead.today}
            casePercentage={cases.dead.percentageIncrease}
          />
          <Chart
            className='h-16'
            chartType="LineChart"
            loader={<div>Sedang mempersiapkan grafik</div>}
            data={
              cases.dead.historical
            }
            chartEvents={[
              {
                eventName: 'ready',
                callback: ({ chartWrapper }) => {
                  chartWrapper.getChart().setSelection(
                    [{ row: cases.dead.historical.length - 2, column: 1 }]
                  );
                }
              }
            ]}
            options={{
              legend: 'none',
              curveType: 'function',
              pointSize: 0.1,
              hAxis: {
                baselineColor: 'white',
                gridlines: {
                  color: 'white'
                },
              },
              vAxis: {
                baselineColor: 'white',
                gridlines: {
                  color: 'white'
                },
                viewWindow: {
                  min: cases.dead.min,
                  max: cases.dead.max,
                }
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </Card>
      </Wrapper>
    </Layout>
  );
}

export default IndexPage;
