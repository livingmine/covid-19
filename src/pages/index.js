import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

import Layout from "../components/layout";
import SEO from "../components/seo";

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

      <div className="w-full text-center mt-4">
        <p className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl">Monitoring COVID-19</p>
        <p className="text-sm text-gray-700">last updated at 15 March 2020 at 18:00</p>
      </div>

      <div className="w-full mt-4">
        <div className="flex flex-row justify-center items-center">
          <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z" />
          </svg>
          <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">30</p>
          <p className="mt-3 ml-1 text-sm text-gray-700">days</p>
        </div>

        <div className="flex justify-center">
          <p className="text-xs font-hairline text-gray-700">since first case occured</p>
        </div>
      </div>

      <div className="w-full bg-gray-200 h-auto mt-4 mx-auto py-4">
        <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* Experiment */}
            <div className="sm:w-1/2 md:w-2/5 lg:w-2/4 xl:w-1/4 h-40 bg-white m-2 px-2 rounded-md shadow-lg">
              <div className="w-full flex h-auto pt-2">
                  <div className="w-6/12 pl-2">
                    <div className="flex flex-col max-w-full">
                      <p className="text-gray-600 text-sm tracking-wider uppercase">Dirawat</p>
                      <div className="flex flex-row">
                          <p className="text-3xl font-bold">{cases.treated.cumulative}</p>
                          <div className="w-4 h-4 mt-3 pt-1 pl-1">
                              <svg className="w-4 h-4 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                  <path
                                      d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                              </svg>
                          </div>
                          {/* <!-- <p className="text-gray-600 text-sm pt-4 ml-1">people</p> --> */}
                      </div>
                    </div>
                  </div>
                  <div className="w-6/12">
                    {/* Badge */}
                    <div className="flex justify-between items-baseline bg-red-100 border-2 border-red-400 px-1 py-1 rounded-lg">
                      <div className="flex flex-row items-center">
                        <span className="text-teal-600 text-xs font-extrabold mr-1" >+ {cases.treated.today}</span>
                        <svg className="w-3 h-3 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path
                              d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                        </svg>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="text-teal-600 text-xs font-extrabold mr-1">{cases.treated.percentageIncrease} %</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-current text-red-500" viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z" />
                        </svg>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3 h-3 fill-current text-red-500">
                          <path d="M7 11H1L12 0l11 11h-6v13H7z"/>
                        </svg> */}
                      </div>
                    </div>
                    {/* End of Badge */}
                  </div>
              </div>
              <div className="h-auto">
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
                          [{row: cases.treated.historical.length - 2,column:1}]
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
                  {/* <!-- Reserved for graph / wave icon. Please note that the height can be adjusted as necessary --> */}
              </div>
            </div>
            <div className="sm:w-1/2 md:w-2/5 lg:w-2/4 xl:w-1/4 h-40 bg-white m-2 px-2 rounded-md shadow-lg">
              <div className="w-full flex h-auto pt-2">
                  <div className="w-6/12 pl-2">
                    <div className="flex flex-col max-w-full">
                      <p className="text-gray-600 text-sm tracking-wider uppercase">Sembuh</p>
                      <div className="flex flex-row">
                          <p className="text-3xl font-bold">{cases.recovered.cumulative}</p>
                          <div className="w-4 h-4 mt-3 pt-1 pl-1">
                              <svg className="w-4 h-4 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                  <path
                                      d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                              </svg>
                          </div>
                          {/* <!-- <p className="text-gray-600 text-sm pt-4 ml-1">people</p> --> */}
                      </div>
                    </div>
                  </div>
                  <div className="w-6/12">
                    {/* Badge */}
                    <div className="flex justify-between items-baseline bg-green-100 border-2 border-green-400 px-1 py-1 rounded-lg">
                      <div className="flex flex-row items-center">
                        <span className="text-teal-600 text-xs font-extrabold mr-1" >+ {cases.recovered.today}</span>
                        <svg className="w-3 h-3 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path
                              d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                        </svg>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="text-teal-600 text-xs font-extrabold mr-1">{cases.recovered.percentageIncrease} %</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-current text-green-500" viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z" />
                        </svg>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3 h-3 fill-current text-green-500">
                          <path d="M7 11H1L12 0l11 11h-6v13H7z"/>
                        </svg> */}
                      </div>
                    </div>
                    {/* End of Badge */}
                  </div>
              </div>
              <div className="h-auto">
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
                          [{row:cases.recovered.historical.length - 2,column:1}]
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
                  {/* <!-- Reserved for graph / wave icon. Please note that the height can be adjusted as necessary --> */}
              </div>
            </div>
            <div className="sm:w-1/2 md:w-2/5 lg:w-2/4 xl:w-1/4 h-40 bg-white m-2 px-2 rounded-md shadow-lg">
              <div className="w-full flex h-auto pt-2">
                  <div className="w-6/12 pl-2">
                    <div className="flex flex-col max-w-full">
                      <p className="text-gray-600 text-sm tracking-wider uppercase">Meninggal</p>
                      <div className="flex flex-row">
                          <p className="text-3xl font-bold">{cases.dead.cumulative}</p>
                          <div className="w-4 h-4 mt-3 pt-1 pl-1">
                              <svg className="w-4 h-4 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                  <path
                                      d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                              </svg>
                          </div>
                          {/* <!-- <p className="text-gray-600 text-sm pt-4 ml-1">people</p> --> */}
                      </div>
                    </div>
                  </div>
                  <div className="w-6/12">
                    {/* Badge */}
                    <div className="flex justify-between items-baseline bg-red-100 border-2 border-red-400 px-1 py-1 rounded-lg">
                      <div className="flex flex-row items-center">
                        <span className="text-teal-600 text-xs font-extrabold mr-1">+ {cases.dead.today}</span>
                        <svg className="w-3 h-3 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path
                            d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                        </svg>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="text-teal-600 text-xs font-extrabold mr-1">{cases.dead.percentageIncrease} %</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-current text-red-500" viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z" />
                        </svg>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3 h-3 fill-current text-red-500">
                          <path d="M7 11H1L12 0l11 11h-6v13H7z" />
                        </svg> */}
                      </div>
                    </div>
                    {/* End of Badge */}
                  </div>
              </div>
              <div className="h-auto">
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
                          [{row:cases.dead.historical.length - 2,column:1}]
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
                  {/* <!-- Reserved for graph / wave icon. Please note that the height can be adjusted as necessary --> */}
              </div>
            </div>
            {/* Experiment */}
        </div>
      </div>

      {/* <div className="w-full flex p-4">
          <div className="bg-white h-32 w-full rounded-md shadow-lg">
          </div>
      </div> */}

      {/* <!-- Information section --> */}
      {/* <div className="w-full mt-4 mb-4">
        <div className="flex flex-wrap sm:flex-no-wrap sm:flex-row justify-center">
            <div className="bg-white w-full sm:w-3/4 lg:w-2/5 h-auto rounded-md shadow-lg my-2 mx-4 p-4">
                <p className="font-bold text-xl text-center">What is Corona Virus?</p>
                <p className="text-justify text-sm mt-2">
                    Coronaviruses are a large family of viruses which may cause illness in animals or humans. In humans, several
                    coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as
                    Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered
                    coronavirus causes coronavirus disease COVID-19.
                </p>
            </div>
            <div className="bg-white w-full sm:w-3/4 lg:w-2/5 h-auto rounded-md shadow-lg my-2 mx-4 p-4">
                <p className="font-bold text-xl text-center">What is COVID-19?</p>
                <p className="text-justify text-sm mt-2">
                    COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease
                    were
                    unknown before the outbreak began in Wuhan, China, in December 2019.
                </p>
            </div>
        </div>
      </div>

      <div className="w-full flex justify-center px-4 mb-4">
        <div className="w-full sm:w-3/4 md:w-3/5 lg:w-3/6 xl:w-2/5 bg-blue-700 h-auto rounded-md shadow-lg text-white p-4">
            <div className="w-full flex items-center mb-2">
                <svg className="w-4 h-4 mr-2 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM9 5v6h2V5H9zm0 8v2h2v-2H9z" />
                </svg>
                <p className="text-xl font-bold">Are/Have you...</p>
            </div>
            <div className="text-sm">
                <ul>
                    <li className="flex flex-row items-center">
                        <div className="p-1">
                            <svg className="w-6 h-6 fill-current text-white mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                            </svg>
                        </div>
                        <div>
                            <p>travelled to infected countries recently?</p>
                        </div>
                    </li>

                    <li className="flex flex-row items-center">
                        <div className="p-1">
                            <svg className="w-6 h-6 fill-current text-white mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                            </svg>
                        </div>
                        <div>
                            <p>having fever? (38°C)</p>
                        </div>
                    </li>

                    <li className="flex flex-row items-center">
                        <div className="p-1">
                            <svg className="w-6 h-6 fill-current text-white mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                            </svg>
                        </div>
                        <div>
                            <p>having dry cough?</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="h-auto w-full mt-6 text-justify">
                <p className="font-bold text-sm">If you experienced one of those symptomps or all, contact :</p>
                <div className="w-full h-auto mt-4 p-2">
                    <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/2 flex justify-center p-2">
                            <a href="tel:112" className="w-full">
                                <button className="w-full flex flex-row justify-center items-center rounded-md border bg-white p-2 text-blue-500">
                                  <svg className="w-4 h-4 mr-1 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z" />
                                  </svg>
                                  <p className="font-bold tracking-wide">112</p>
                                </button>
                            </a>
                        </div>
                        <div className="w-full sm:w-1/2 flex justify-center p-2">
                            <a href="tel:081388376955" className="w-full">
                                <button className="w-full flex flex-row justify-center items-center rounded-md border bg-white p-2 text-blue-500">
                                  <svg className="w-4 h-4 mr-1 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z" />
                                  </svg>
                                  <p className="font-bold tracking-wide">0813-8837-6955</p>
                                </button>
                            </a>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
      </div> */}


    </Layout>
  );
}

export default IndexPage;
