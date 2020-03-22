import React from "react";
import { Chart } from "react-google-charts";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <div className="w-full text-center mt-16">
          <p className="text-sm text-gray-700">last updated at 15 March 2020 at 18:00</p>
      </div>

      <div className="w-full h-auto mt-4 mx-auto">
        <div className="flex flex-col sm:flex-row justify-center">
            {/* Experiment */}
            <div className="w-5/6 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 h-32 bg-white mx-auto sm:mx-1 md:mx-4 my-1 px-2 rounded-md shadow-lg">
              <div className="w-full flex h-auto pt-2">
                  <div className="w-6/12 pl-2">
                    <div className="flex flex-col max-w-full">
                      <p className="text-gray-600 text-sm tracking-wider uppercase">Dirawat</p>
                      <div className="flex flex-row">
                          <p className="text-3xl font-bold">269</p>
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
                    <div className="flex items-baseline bg-red-100 border-2 border-red-400 px-1 py-1 rounded-lg">
                      <span className="text-teal-600 text-xs font-extrabold mr-1" >+120</span>
                      <svg className="w-3 h-3 fill-current text-gray-600 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                      </svg>
                      <span className="text-teal-600 text-xs font-extrabold mr-1">4.1 %</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3 h-3 fill-current text-red-500">
                        <path d="M7 11H1L12 0l11 11h-6v13H7z"/>
                      </svg>
                    </div>
                    {/* End of Badge */}
                  </div>
              </div>
              <div className="h-8">
                <Chart
                  className='h-8'
                  chartType="LineChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['x', 'dogs', {'type': 'string', 'role': 'style'}],
                    [0, 0, null],
                    [1, 10, null],
                    [2, 23, null],
                    [3, 17, null],
                    [4, 18, null],
                    [5, 9, null],
                    [6, 11, null],
                    [7, 27, null],
                    [8, 33, null],
                    [9, 40, null],
                    [10, 32, null],
                    [11, 35, null],
                    [12, 1, 'point { size: 4; shape-type: circle; fill-color: #a52714; }']
                    // [12, 1, null]
                  ]}
                  chartEvents={[
                    {
                      eventName: 'ready',
                      callback: ({ chartWrapper }) => {
                        chartWrapper.getChart().setSelection(
                          [{row:12,column:1}]
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
                    },
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
                  {/* <!-- Reserved for graph / wave icon. Please note that the height can be adjusted as necessary --> */}
              </div>
            </div>
            <div className="w-5/6 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 h-32 bg-white mx-auto sm:mx-1 md:mx-4 my-1 px-2 rounded-md shadow-lg">
              <div className="w-full flex h-auto pt-2">
                  <div className="w-6/12 pl-2">
                    <div className="flex flex-col max-w-full">
                      <p className="text-gray-600 text-sm tracking-wider uppercase">Sembuh</p>
                      <div className="flex flex-row">
                          <p className="text-3xl font-bold">269</p>
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
                    <div className="flex items-baseline bg-green-100 border-2 border-green-400 px-1 py-1 rounded-lg">
                      <span className="text-teal-600 text-xs font-extrabold mr-1" >+120</span>
                      <svg className="w-3 h-3 fill-current text-gray-600 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                      </svg>
                      <span className="text-teal-600 text-xs font-extrabold mr-1">4.1 %</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3 h-3 fill-current text-green-500">
                        <path d="M7 11H1L12 0l11 11h-6v13H7z"/>
                      </svg>
                    </div>
                    {/* End of Badge */}
                  </div>
              </div>
              <div className="h-8">
                <Chart
                  className='h-8'
                  chartType="LineChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['x', 'dogs', {'type': 'string', 'role': 'style'}],
                    [0, 0, null],
                    [1, 10, null],
                    [2, 23, null],
                    [3, 17, null],
                    [4, 18, null],
                    [5, 9, null],
                    [6, 11, null],
                    [7, 27, null],
                    [8, 33, null],
                    [9, 40, null],
                    [10, 32, null],
                    [11, 35, null],
                    [12, 1, 'point { size: 4; shape-type: circle; fill-color: #a52714; }']
                    // [12, 1, null]
                  ]}
                  chartEvents={[
                    {
                      eventName: 'ready',
                      callback: ({ chartWrapper }) => {
                        chartWrapper.getChart().setSelection(
                          [{row:12,column:1}]
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
                    },
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
                  {/* <!-- Reserved for graph / wave icon. Please note that the height can be adjusted as necessary --> */}
              </div>
            </div>
            <div className="w-5/6 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 h-32 bg-white mx-auto sm:mx-1 md:mx-4 my-1 px-2 rounded-md shadow-lg">
              <div className="w-full flex h-auto pt-2">
                  <div className="w-6/12 pl-2">
                    <div className="flex flex-col max-w-full">
                      <p className="text-gray-600 text-sm tracking-wider uppercase">Meninggal</p>
                      <div className="flex flex-row">
                          <p className="text-3xl font-bold">269</p>
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
                    <div className="flex items-baseline bg-green-100 border-2 border-green-400 px-1 py-1 rounded-lg">
                      <span className="text-teal-600 text-xs font-extrabold mr-1" >+120</span>
                      <svg className="w-3 h-3 fill-current text-gray-600 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                      </svg>
                      <span className="text-teal-600 text-xs font-extrabold mr-1">4.1 %</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3 h-3 fill-current text-green-500">
                        <path d="M7 11H1L12 0l11 11h-6v13H7z"/>
                      </svg>
                    </div>
                    {/* End of Badge */}
                  </div>
              </div>
              <div className="h-8">
                <Chart
                  className='h-8'
                  chartType="LineChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['x', 'dogs', {'type': 'string', 'role': 'style'}],
                    [0, 0, null],
                    [1, 10, null],
                    [2, 23, null],
                    [3, 17, null],
                    [4, 18, null],
                    [5, 9, null],
                    [6, 11, null],
                    [7, 27, null],
                    [8, 33, null],
                    [9, 40, null],
                    [10, 32, null],
                    [11, 35, null],
                    [12, 1, 'point { size: 4; shape-type: circle; fill-color: #a52714; }']
                    // [12, 1, null]
                  ]}
                  chartEvents={[
                    {
                      eventName: 'ready',
                      callback: ({ chartWrapper }) => {
                        chartWrapper.getChart().setSelection(
                          [{row:12,column:1}]
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

      <div className="w-full flex p-4">
          <div className="bg-white h-32 w-full rounded-md shadow-lg">
              {/* <!-- Reserved for main content --> */}
          </div>
      </div>

      {/* <!-- Information section --> */}
      <div className="w-full mt-4 mb-4">
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
                                <button className="w-full rounded-md border bg-white p-2 text-blue-500">
                                    112
                                </button>
                            </a>
                        </div>
                        <div className="w-full sm:w-1/2 flex justify-center p-2">
                            <a href="tel:081388376955" className="w-full">
                                <button className="w-full rounded-md border bg-white p-2 text-blue-500">
                                    0813 8837 6955
                                </button>
                            </a>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
      </div>


    </Layout>
  );
}

export default IndexPage;
