import React from 'react';
import { Typography } from '@material-tailwind/react';
import { useRouter } from 'next/router';

const ViewThe = () => {
  const router = useRouter();

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-10">
          <div className="max-md:order-2">
            <Typography variant="h3" className="mb-3 font-medium">
              View the problem areas on the map
            </Typography>
            <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
              Risk points those detected from images by Artificial Intelligence Technology are shown on the map with
              high positional accuracy which lets you to have exact location of this spots. Identifying the problem area
              is the first step towards solving it.
            </Typography>
          </div>

          <div className="relative max-md:order-1">
            <img src="/images/energy-card-1.png" alt="energy-card-1" />
            <svg
              style={{ position: 'absolute', left: 0, top: 0 }}
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 550 410"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="energy-1024x683"
                    width={550}
                    height={410}
                    rx={16}
                    transform="translate(8630.058 6458.563)"
                    fill="#fff1f1"
                  />
                </clipPath>
                <filter
                  id="Path_190152"
                  x="63.526"
                  y="289.118"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190154"
                  x="27.356"
                  y="289.213"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-2" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-2" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190156"
                  x="67.356"
                  y="214.213"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-3" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-3" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190158"
                  x="136.356"
                  y="80.213"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-4" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-4" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190160"
                  x="147.356"
                  y="74.13"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-5" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-5" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190162"
                  x="192.356"
                  y="93.213"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-6" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-6" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190164"
                  x="306.356"
                  y="70.171"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-7" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-7" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190166"
                  x="246.356"
                  y="84.171"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-8" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-8" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190168"
                  x="344.356"
                  y="68.171"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-9" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-9" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190170"
                  x="497.356"
                  y="141.171"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-10" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-10" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190172"
                  x="386.356"
                  y="88.255"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-11" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-11" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190174"
                  x="559.356"
                  y="132.296"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-12" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-12" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190176"
                  x="129.356"
                  y="112.213"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-13" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-13" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190178"
                  x="71.356"
                  y="183.213"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-14" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-14" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190180"
                  x="39.56"
                  y="240.213"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-15" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-15" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190182"
                  x="39.56"
                  y="329.379"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-16" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-16" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190184"
                  x="80.261"
                  y="322.771"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-17" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-17" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190186"
                  x="81.927"
                  y="360.144"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-18" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-18" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190188"
                  x="27.356"
                  y="350.102"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-19" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-19" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190190"
                  x="111.609"
                  y="309.296"
                  width="23.083"
                  height="23.082"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="0.5" result="blur-20" />
                  <feFlood floodOpacity="0.078" />
                  <feComposite operator="in" in2="blur-20" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="energy-1024x683"
                    width={550}
                    height={410}
                    rx={16}
                    transform="translate(8630.058 6458.563)"
                    fill="#fff1f1"
                  />
                </clipPath>
                <filter
                  id="Union_453"
                  x="124.554"
                  y="43.792"
                  width="42.583"
                  height="47.416"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_454"
                  x="476.06"
                  y="93.203"
                  width="42.584"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-2" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-2" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_455"
                  x="260.06"
                  y="75.171"
                  width="42.584"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-3" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-3" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <clipPath id="clip-path-2">
                  <circle
                    id="Ellipse_2614"
                    data-name="Ellipse 2614"
                    cx="16.02"
                    cy="16.02"
                    r="16.02"
                    fill="#fff"
                    stroke="#707070"
                    strokeWidth={1}
                    opacity="0.67"
                  />
                </clipPath>
                <filter
                  id="Union_456"
                  x="435.587"
                  y="133.675"
                  width="42.584"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-4" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-4" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_457"
                  x="101.289"
                  y="125.244"
                  width="42.584"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-5" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-5" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_458"
                  x="78.945"
                  y="326.774"
                  width="42.584"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-6" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-6" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_459"
                  x="57.32"
                  y="347.011"
                  width="42.584"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-7" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-7" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190457"
                  x="78.945"
                  y="129.243"
                  width="42.585"
                  height="47.471"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-8" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-8" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Path_190465"
                  x="147.242"
                  y="52.731"
                  width="42.585"
                  height="47.471"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-9" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-9" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_460"
                  x="177.146"
                  y="99.556"
                  width="42.583"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-10" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-10" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_461"
                  x="202.146"
                  y="93.203"
                  width="42.583"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-11" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-11" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_462"
                  x="217.618"
                  y="99.556"
                  width="42.583"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-12" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-12" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_463"
                  x="327.618"
                  y="72.968"
                  width="42.583"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-13" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-13" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_464"
                  x="524.618"
                  y="140.028"
                  width="42.583"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-14" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-14" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_465"
                  x="390.618"
                  y="93.203"
                  width="42.583"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-15" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-15" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_466"
                  x="106.771"
                  y="273.98"
                  width="42.583"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-16" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-16" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_467"
                  x="119.418"
                  y="292.217"
                  width="42.583"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-17" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-17" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_468"
                  x="22.389"
                  y="221.187"
                  width="42.584"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-18" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-18" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_469"
                  x="416.389"
                  y="75.171"
                  width="42.584"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-19" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-19" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_470"
                  x="81.054"
                  y="165.716"
                  width="42.584"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-20" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-20" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_471"
                  x="-8.946"
                  y="266.716"
                  width="42.584"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-21" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-21" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Union_472"
                  x="139.697"
                  y="84.265"
                  width="42.583"
                  height="47.472"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="0.2" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation={1} result="blur-22" />
                  <feFlood floodColor="#606170" floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur-22" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <g id="blue_line_energy" transform="translate(-8630.058 -6458.563)" clipPath="url(#clip-path)">
                <g id="Group_107508" data-name="Group 107508" transform="translate(8305.759 6339.215)">
                  <g id="Group_107460" data-name="Group 107460" transform="translate(81.787 134.616)">
                    <path
                      id="blue-line"
                      data-name="Path 190151"
                      d="M-1731.586,8739.085l-62.426,7.4-64.739-18.5-52.716-34.219-39.306-19.884-36.993,3.237-62.889,14.335-50.866,7.86-27.745-5.549-20.346-13.41-8.786,4.162-.82,3.883-6.116,28.949-59.189,73.523-3.237,30.059-19.6,8.785-8.419,17.109-9.892,4.514-13.26,19.784,1.894,17.049,9.682,7.577,20-4.209,16.418,2.316-16.418,13.258-8.419,10.314v15.574l-11.576,24.416,57.46,6.314-4.42-37.255,16.207-17.47s13.346,4.711,13.816,4.867"
                      transform="translate(2548.916 -8609.425)"
                      fill="none"
                      stroke="#0074e9"
                      strokeWidth={4}
                      opacity="0.7"
                      className="animateRoad"
                    />
                    <g
                      id="Group_107439"
                      data-name="Group 107439"
                      transform="matrix(0.951, -0.309, 0.309, 0.951, 307.538, 280.276)"
                    >
                      <g transform="matrix(0.95, 0.31, -0.31, 0.95, 29.48, -301.17)" filter="url(#Path_190152)">
                        <path
                          id="Path_190152-2"
                          data-name="Path 190152"
                          d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                          transform="matrix(0.95, -0.31, 0.31, 0.95, 65.03, 295.54)"
                          fill="#0074e9"
                          opacity="0.4"
                        />
                      </g>
                      <path
                        id="Path_190153"
                        data-name="Path 190153"
                        d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                        transform="translate(2.974 2.965)"
                        fill="#0074e9"
                      />
                    </g>
                    <g id="Group_107459" data-name="Group 107459" transform="translate(0 0)">
                      <g
                        id="Group_107440"
                        data-name="Group 107440"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 271.368, 280.37)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, 63.91, -290.09)" filter="url(#Path_190154)">
                          <path
                            id="Path_190154-2"
                            data-name="Path 190154"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 28.86, 295.64)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190155"
                          data-name="Path 190155"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107441"
                        data-name="Group 107441"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 311.368, 205.37)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, 2.69, -231.12)" filter="url(#Path_190156)">
                          <path
                            id="Path_190156-2"
                            data-name="Path 190156"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 68.86, 220.64)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190157"
                          data-name="Path 190157"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107442"
                        data-name="Group 107442"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 380.368, 71.37)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, -104.34, -125)" filter="url(#Path_190158)">
                          <path
                            id="Path_190158-2"
                            data-name="Path 190158"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 137.86, 86.64)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190159"
                          data-name="Path 190159"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107443"
                        data-name="Group 107443"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 391.368, 65.286)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, -116.68, -122.61)" filter="url(#Path_190160)">
                          <path
                            id="Path_190160-2"
                            data-name="Path 190160"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 148.86, 80.55)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190161"
                          data-name="Path 190161"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107444"
                        data-name="Group 107444"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 436.368, 84.37)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, -153.58, -154.67)" filter="url(#Path_190162)">
                          <path
                            id="Path_190162-2"
                            data-name="Path 190162"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 193.86, 99.64)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190163"
                          data-name="Path 190163"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107445"
                        data-name="Group 107445"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 550.368, 61.328)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, -269.12, -167.98)" filter="url(#Path_190164)">
                          <path
                            id="Path_190164-2"
                            data-name="Path 190164"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 307.86, 76.6)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190165"
                          data-name="Path 190165"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107446"
                        data-name="Group 107446"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 490.368, 75.328)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, -207.73, -162.75)" filter="url(#Path_190166)">
                          <path
                            id="Path_190166-2"
                            data-name="Path 190166"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 247.86, 90.6)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190167"
                          data-name="Path 190167"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107447"
                        data-name="Group 107447"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 588.368, 59.328)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, -305.88, -177.82)" filter="url(#Path_190168)">
                          <path
                            id="Path_190168-2"
                            data-name="Path 190168"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 345.86, 74.6)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190169"
                          data-name="Path 190169"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107448"
                        data-name="Group 107448"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 741.368, 132.328)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, -428.83, -294.53)" filter="url(#Path_190170)">
                          <path
                            id="Path_190170-2"
                            data-name="Path 190170"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 498.86, 147.6)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190171"
                          data-name="Path 190171"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107449"
                        data-name="Group 107449"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 630.368, 79.411)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, -339.62, -209.9)" filter="url(#Path_190172)">
                          <path
                            id="Path_190172-2"
                            data-name="Path 190172"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 387.86, 94.68)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190173"
                          data-name="Path 190173"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107450"
                        data-name="Group 107450"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 803.368, 123.453)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, -490.54, -305.25)" filter="url(#Path_190174)">
                          <path
                            id="Path_190174-2"
                            data-name="Path 190174"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 560.86, 138.72)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190175"
                          data-name="Path 190175"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107451"
                        data-name="Group 107451"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 373.368, 103.37)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, -87.79, -153.27)" filter="url(#Path_190176)">
                          <path
                            id="Path_190176-2"
                            data-name="Path 190176"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 130.86, 118.64)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190177"
                          data-name="Path 190177"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107452"
                        data-name="Group 107452"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 315.368, 174.37)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, -10.69, -202.87)" filter="url(#Path_190178)">
                          <path
                            id="Path_190178-2"
                            data-name="Path 190178"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 72.86, 189.64)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190179"
                          data-name="Path 190179"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107453"
                        data-name="Group 107453"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 283.571, 231.37)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, 37.17, -247.25)" filter="url(#Path_190180)">
                          <path
                            id="Path_190180-2"
                            data-name="Path 190180"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 41.06, 246.64)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190181"
                          data-name="Path 190181"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107454"
                        data-name="Group 107454"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 283.571, 320.536)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, 64.72, -332.06)" filter="url(#Path_190182)">
                          <path
                            id="Path_190182-2"
                            data-name="Path 190182"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 41.06, 335.8)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190183"
                          data-name="Path 190183"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107455"
                        data-name="Group 107455"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 324.273, 313.928)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, 23.97, -338.35)" filter="url(#Path_190184)">
                          <path
                            id="Path_190184-2"
                            data-name="Path 190184"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 81.76, 329.2)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190185"
                          data-name="Path 190185"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107456"
                        data-name="Group 107456"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 325.939, 351.3)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, 33.93, -374.41)" filter="url(#Path_190186)">
                          <path
                            id="Path_190186-2"
                            data-name="Path 190186"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 83.43, 366.57)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190187"
                          data-name="Path 190187"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107457"
                        data-name="Group 107457"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 271.368, 341.258)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, 82.73, -347.99)" filter="url(#Path_190188)">
                          <path
                            id="Path_190188-2"
                            data-name="Path 190188"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 28.86, 356.53)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190189"
                          data-name="Path 190189"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                      <g
                        id="Group_107458"
                        data-name="Group 107458"
                        transform="matrix(0.951, -0.309, 0.309, 0.951, 355.621, 300.453)"
                      >
                        <g transform="matrix(0.95, 0.31, -0.31, 0.95, -10.01, -335.22)" filter="url(#Path_190190)">
                          <path
                            id="Path_190190-2"
                            data-name="Path 190190"
                            d="M7.972,15.938a7.969,7.969,0,1,1,7.966-7.971A7.981,7.981,0,0,1,7.972,15.938Z"
                            transform="matrix(0.95, -0.31, 0.31, 0.95, 113.11, 315.72)"
                            fill="#0074e9"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          id="Path_190191"
                          data-name="Path 190191"
                          d="M10.2,5.1A5.1,5.1,0,1,1,5.1,0,5.1,5.1,0,0,1,10.2,5.1Z"
                          transform="translate(2.974 2.965)"
                          fill="#0074e9"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                xmlns="http://www.w3.org/2000/svg"
                id="data"
                transform="translate(-8630.058 -6458.563)"
                clipPath="url(#clip-path)"
              >
                <g id="Group_107578" data-name="Group 107578" transform="translate(8305.759 6339.215)">
                  <g id="datas" data-name="Group 107577" transform="translate(160.202 130.691)" className="animateData">
                    <g id="inst-utility-pole-transformers-iron" style={{ '--t': 'translate(289.707px, 35.749px)' }}>
                      <rect
                        id="Rectangle_39342"
                        data-name="Rectangle 39342"
                        width="40.472"
                        height="40.472"
                        transform="translate(0 0)"
                        fill="#fff"
                        opacity={0}
                      />
                      <g transform="matrix(1, 0, 0, 1, -125.61, -47.09)" filter="url(#Union_453)">
                        <path
                          id="Union_453-2"
                          data-name="Union 453"
                          d="M17.044,40.081,12.271,34.71a17.791,17.791,0,1,1,11.041,0l-4.773,5.37a1,1,0,0,1-1.495,0Z"
                          transform="translate(128.05 47.09)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                      </g>
                      <path
                        id="Path_190398"
                        data-name="Path 190398"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.223 1.779)"
                        fill="#3083ff"
                      />
                      <g id="Group_107536" data-name="Group 107536" transform="translate(12.145 7.589)">
                        <rect
                          id="Rectangle_39343"
                          data-name="Rectangle 39343"
                          width="0.634"
                          height="0.839"
                          rx="0.317"
                          transform="translate(7 16.274)"
                          fill="#ffb833"
                        />
                        <rect
                          id="Rectangle_39344"
                          data-name="Rectangle 39344"
                          width="0.634"
                          height="0.839"
                          rx="0.317"
                          transform="translate(8.574 16.274)"
                          fill="#ffb833"
                        />
                        <rect
                          id="Rectangle_39345"
                          data-name="Rectangle 39345"
                          width="1.278"
                          height="2.624"
                          rx="0.639"
                          fill="#ffb833"
                        />
                        <rect
                          id="Rectangle_39346"
                          data-name="Rectangle 39346"
                          width="1.278"
                          height="2.624"
                          rx="0.639"
                          transform="translate(14.874)"
                          fill="#ffb833"
                        />
                        <rect
                          id="Rectangle_39347"
                          data-name="Rectangle 39347"
                          width="1.278"
                          height="2.624"
                          rx="0.639"
                          transform="translate(6.24)"
                          fill="#ffb833"
                        />
                        <path
                          id="Subtraction_151"
                          data-name="Subtraction 151"
                          d="M2.952,3.4c-.211,0-.425,0-.635-.012L0,.615.063,0,1.3.006,4.062,3.359C3.686,3.384,3.313,3.4,2.952,3.4Z"
                          transform="translate(5.13 22.843)"
                          fill="#c9d4db"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                        <path
                          id="Path_190401"
                          data-name="Path 190401"
                          d="M3.338,24.828l2.752-3.34-4.541-.042-.278,3.1c-.43-.087-.857-.194-1.27-.314l.25-2.789L1.673,5.522l.036-.408.042-.469.3-3.374L2.165,0H6.723l.229,2.578L7,3.111l.136,1.535.027.294L8.643,21.5l.246,2.748c-.422.12-.851.223-1.276.307h0v0c-.1-1.022-.175-1.906-.223-2.456L5.082,24.853c-.216.008-.431.013-.64.013C4.074,24.866,3.7,24.853,3.338,24.828ZM2.1,15.176l-.445,5.007H7.23l-.5-5.621-4.571-.03Zm.17-1.906H5.66L2.7,8.482Zm4.258-.957-.4-4.544H3.411ZM2.876,6.6H5.231L3.238,2.52ZM5.908,5.433,5.54,1.293h-1.7Z"
                          transform="translate(3.641 1.374)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                        />
                        <path
                          id="Path_190402"
                          data-name="Path 190402"
                          d="M2920.575,2197.053h-8.512v-1.287h16.158v1.287Z"
                          transform="translate(-2912.057 -2194.387)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190403"
                          data-name="Path 190403"
                          d="M3028.885,2399.973h4.788l.124,1.287h-4.912Z"
                          transform="translate(-3018.658 -2380.726)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190404"
                          data-name="Path 190404"
                          d="M2935.356,2401.26h-4.271l.124-1.287h4.421Z"
                          transform="translate(-2929.415 -2380.726)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190405"
                          data-name="Path 190405"
                          d="M2920.575,2427.655h-8.512l.124-1.287h15.91l.124,1.287Z"
                          transform="translate(-2912.057 -2404.811)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190406"
                          data-name="Path 190406"
                          d="M2984.447,2285.1l.076-.724.637.009,3.12,4.545.09.956h-.96Z"
                          transform="translate(-2978.108 -2275.245)"
                          fill="#c9d4db"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190407"
                          data-name="Path 190407"
                          d="M2990.628,2211.7l.134-1.226h.464l2.073,4.14.111,1.166h-.789Z"
                          transform="translate(-2983.748 -2207.811)"
                          fill="#c9d4db"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190408"
                          data-name="Path 190408"
                          d="M2983.512,2282.378l.079-.985-.793.27-3.148,4.586-.062.915h.961Z"
                          transform="translate(-2973.674 -2272.521)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190409"
                          data-name="Path 190409"
                          d="M2989.268,2208.461l.169-1.537-.766.311-2.1,4.2-.079,1.1h.788Z"
                          transform="translate(-2979.97 -2204.569)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <g id="Group_107535" data-name="Group 107535" transform="translate(5.862 16.624)">
                          <rect
                            id="Rectangle_39348"
                            data-name="Rectangle 39348"
                            width="0.523"
                            height="4.498"
                            rx="0.262"
                            transform="translate(0 0.087)"
                            fill="#c9d4db"
                          />
                          <rect
                            id="Rectangle_39349"
                            data-name="Rectangle 39349"
                            width="0.622"
                            height="4.498"
                            rx="0.311"
                            transform="translate(0.7 0.087)"
                            fill="#c9d4db"
                          />
                          <path
                            id="Rectangle_39350"
                            data-name="Rectangle 39350"
                            d="M.262,0h0A.262.262,0,0,1,.523.262V4.236A.262.262,0,0,1,.262,4.5h0A.262.262,0,0,1,0,4.236V.262A.262.262,0,0,1,.262,0Z"
                            transform="translate(3.937 0.087)"
                            fill="#c9d4db"
                          />
                          <rect
                            id="Rectangle_39351"
                            data-name="Rectangle 39351"
                            width="4.498"
                            height="0.523"
                            rx="0.262"
                            fill="#c9d4db"
                          />
                          <path
                            id="Rectangle_39352"
                            data-name="Rectangle 39352"
                            d="M.262,0H4.236A.262.262,0,0,1,4.5.262v0a.262.262,0,0,1-.262.262H.262A.262.262,0,0,1,0,.262v0A.262.262,0,0,1,.262,0Z"
                            transform="translate(0 4.113)"
                            fill="#c9d4db"
                          />
                          <path
                            id="Rectangle_39353"
                            data-name="Rectangle 39353"
                            d="M.311,0h0A.311.311,0,0,1,.622.311V4.187A.311.311,0,0,1,.311,4.5h0A.311.311,0,0,1,0,4.187V.311A.311.311,0,0,1,.311,0Z"
                            transform="translate(1.499 0.087)"
                            fill="#c9d4db"
                          />
                          <path
                            id="Rectangle_39354"
                            data-name="Rectangle 39354"
                            d="M.311,0h0A.311.311,0,0,1,.622.311V4.187A.311.311,0,0,1,.311,4.5h0A.311.311,0,0,1,0,4.187V.311A.311.311,0,0,1,.311,0Z"
                            transform="translate(2.362 0.087)"
                            fill="#c9d4db"
                          />
                          <rect
                            id="Rectangle_39355"
                            data-name="Rectangle 39355"
                            width="0.622"
                            height="4.498"
                            rx="0.311"
                            transform="translate(3.15 0.087)"
                            fill="#c9d4db"
                          />
                        </g>
                        <path
                          id="Path_190410"
                          data-name="Path 190410"
                          d="M2983.445,2422.9a.287.287,0,0,0,.257.3h3.165a.287.287,0,0,0,.258-.3Z"
                          transform="translate(-2977.194 -2401.645)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <g id="Group_47827" data-name="Group 47827" transform="translate(4.35 13.903)">
                          <rect
                            id="Rectangle_17688"
                            data-name="Rectangle 17688"
                            width="7.481"
                            height="7.481"
                            rx={2}
                            transform="translate(0 0)"
                            fill="#fff"
                          />
                          <path
                            id="Rectangle_17688_-_Outline"
                            data-name="Rectangle 17688 - Outline"
                            d="M1.47.735a.736.736,0,0,0-.735.735V6.011a.736.736,0,0,0,.735.735H6.011a.736.736,0,0,0,.735-.735V1.47A.736.736,0,0,0,6.011.735H1.47M1.47,0H6.011a1.47,1.47,0,0,1,1.47,1.47V6.011a1.47,1.47,0,0,1-1.47,1.47H1.47A1.47,1.47,0,0,1,0,6.011V1.47A1.47,1.47,0,0,1,1.47,0Z"
                            transform="translate(0 0)"
                            fill="#abb4c7"
                          />
                          <path
                            id="Path_34545"
                            data-name="Path 34545"
                            d="M10.229,11.275a.367.367,0,0,1-.367-.367V7.556a.367.367,0,0,1,.735,0v3.351A.367.367,0,0,1,10.229,11.275Z"
                            transform="translate(-8.165 -5.492)"
                            fill="#9098a8"
                          />
                          <path
                            id="Path_34546"
                            data-name="Path 34546"
                            d="M10.229,11.275a.367.367,0,0,1-.367-.367V7.556a.367.367,0,0,1,.735,0v3.351A.367.367,0,0,1,10.229,11.275Z"
                            transform="translate(-6.489 -5.492)"
                            fill="#9098a8"
                          />
                          <path
                            id="Path_34549"
                            data-name="Path 34549"
                            d="M10.229,11.275a.367.367,0,0,1-.367-.367V7.556a.367.367,0,0,1,.735,0v3.351A.367.367,0,0,1,10.229,11.275Z"
                            transform="translate(-4.812 -5.492)"
                            fill="#9098a8"
                          />
                        </g>
                      </g>
                    </g>
                    <g id="inst-utility-pole-low-voltage-iron" style={{ '--t': 'translate(641.212px, 85.16px)' }}>
                      <rect
                        id="Rectangle_39356"
                        data-name="Rectangle 39356"
                        width="40.472"
                        height="40.472"
                        transform="translate(0 0)"
                        fill="#fff"
                        opacity={0}
                      />
                      <g transform="matrix(1, 0, 0, 1, -477.12, -96.5)" filter="url(#Union_454)">
                        <path
                          id="Union_454-2"
                          data-name="Union 454"
                          d="M17.127,40.174l-4.856-5.464a17.793,17.793,0,1,1,11.041,0l-4.855,5.464a.891.891,0,0,1-1.33,0Z"
                          transform="translate(479.56 96.5)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                      </g>
                      <path
                        id="Path_190412"
                        data-name="Path 190412"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.223 1.779)"
                        fill="#3030ff"
                      />
                      <g id="Group_107539" data-name="Group 107539" transform="translate(11.832 7.14)">
                        <path
                          id="Subtraction_152"
                          data-name="Subtraction 152"
                          d="M5.087,26.25h0L1.6,22.084l-.3,3.381-.033.377c-.429-.1-.855-.216-1.267-.348l0-.03L1.864,4.646,2.269,0H6.836l.229,2.578.047.533.137,1.535.026.294L9.129,25.681c-.421.115-.848.214-1.271.293l-.084-.944L7.6,23.1l-.144-1.629H2.9l3.847,4.668a16.233,16.233,0,0,1-1.659.106ZM2.215,15.175,1.77,20.182H6.2Zm1.3-.613,3.756,4.826-.428-4.826H3.516ZM2.81,8.482l-.426,4.786H5.773Zm.713-.715,3.12,4.545-.4-4.545ZM3.35,2.519,2.989,6.6H5.343Zm.6-1.227L6.02,5.433,5.653,1.292H3.948Z"
                          transform="translate(3.525 0.422)"
                          fill="#fff"
                        />
                        <path
                          id="Subtraction_63_-_Outline"
                          data-name="Subtraction 63 - Outline"
                          d="M18.022,26.6l-.129-.154-2.832-3.385-.287,3.227-.472-.109c-.436-.1-.874-.221-1.3-.357l-.322-.1.033-.366L14.574,4.53,15.012-.5h5.34l.473,5.324L22.71,25.916l-.34.093c-.429.118-.868.219-1.305.3l-.381.072.01.012-.769.089a16.659,16.659,0,0,1-1.7.109Zm-1.1-4.777L20.6,26.277l-.4-4.459ZM14.4,20.955l4.009,4.791q.317-.008.633-.029l-3.908-4.742h5.837l.392,4.414q.222-.049.442-.1L19.58.343h-3.8L15.414,4.6,13.58,25.113q.219.065.44.123Zm6.546-.258-5.164-6.636h4.576ZM17.508,14.9l2.347,3.015L19.588,14.9ZM20.2,20.526H14.439l.58-6.517Zm-4.839-.843h3.092l-2.781-3.5ZM20.336,13.8,15.853,7.268h3.783L16.4.792h2.773l.574,6.475h.011ZM17.454,8.111l1.756,2.559-.228-2.559Zm.306-6.475.774,1.547L18.4,1.635Zm1.9,11.976H15.054l.579-6.506Zm-3.684-.843h2.171L16.248,9.7Zm3.173-5.826H15.658L16.193.895ZM16.579,6.1H17.8L16.766,3.987Z"
                          transform="translate(-9.605 0.5)"
                          fill="rgba(0,0,0,0)"
                        />
                        <path
                          id="Path_190415"
                          data-name="Path 190415"
                          d="M3536.614,2362.741l.06-.608,1.241-.005,3.756,4.826.071.795H3540.6Z"
                          transform="translate(-3530.874 -2347.145)"
                          fill="#c9d4db"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190416"
                          data-name="Path 190416"
                          d="M3543.412,2285.194l.083-.714h.631l3.119,4.545.091.957h-.961Z"
                          transform="translate(-3537.077 -2276.291)"
                          fill="#c9d4db"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190417"
                          data-name="Path 190417"
                          d="M3549.593,2211.7l.071-1.225.527,0,2.073,4.14.11,1.166h-.788Z"
                          transform="translate(-3542.717 -2208.763)"
                          fill="#c9d4db"
                          fillRule="evenodd"
                        />
                        <path
                          id="Subtraction_153"
                          data-name="Subtraction 153"
                          d="M3.486,4.782h0L0,.617.063,0,1.3.008,5.146,4.676a16.237,16.237,0,0,1-1.66.106Z"
                          transform="translate(5.126 21.889)"
                          fill="#c9d4db"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                        <g id="Group_107537" data-name="Group 107537" transform="translate(0 2.067)">
                          <rect
                            id="Rectangle_39357"
                            data-name="Rectangle 39357"
                            width="1.278"
                            height="2.624"
                            rx="0.639"
                            transform="translate(0 0)"
                            fill="#ffae35"
                          />
                          <rect
                            id="Rectangle_39358"
                            data-name="Rectangle 39358"
                            width="1.278"
                            height="2.624"
                            rx="0.639"
                            transform="translate(14.874 0)"
                            fill="#ffae35"
                          />
                          <path
                            id="Path_190420"
                            data-name="Path 190420"
                            d="M2920.575,2197.053h-8.512v-1.287h16.158v1.287Z"
                            transform="translate(-2912.057 -2194.386)"
                            fill="#fff"
                            fillRule="evenodd"
                          />
                        </g>
                        <g id="Group_107538" data-name="Group 107538" transform="translate(0 5.439)">
                          <rect
                            id="Rectangle_39359"
                            data-name="Rectangle 39359"
                            width="1.278"
                            height="2.624"
                            rx="0.639"
                            fill="#ffae35"
                          />
                          <rect
                            id="Rectangle_39360"
                            data-name="Rectangle 39360"
                            width="1.278"
                            height="2.624"
                            rx="0.639"
                            transform="translate(14.874)"
                            fill="#ffae35"
                          />
                          <path
                            id="Path_190421"
                            data-name="Path 190421"
                            d="M2920.575,2197.053h-8.512v-1.287h16.158v1.287Z"
                            transform="translate(-2912.057 -2194.386)"
                            fill="#fff"
                            fillRule="evenodd"
                          />
                        </g>
                      </g>
                    </g>
                    <g id="inst-utility-pole-low-voltage-wood" style={{ '--t': 'translate(425.212px, 67.128px)' }}>
                      <rect
                        id="Rectangle_39361"
                        data-name="Rectangle 39361"
                        width="40.472"
                        height="40.472"
                        fill="#fff"
                        opacity={0}
                      />
                      <g id="Group_107544" data-name="Group 107544" transform="translate(2.444 0)">
                        <g id="Group_107543" data-name="Group 107543" transform="translate(0 0)">
                          <g transform="matrix(1, 0, 0, 1, -263.56, -78.47)" filter="url(#Union_455)">
                            <path
                              id="Union_455-2"
                              data-name="Union 455"
                              d="M17.127,40.174l-4.856-5.464a17.793,17.793,0,1,1,11.041,0l-4.855,5.464a.891.891,0,0,1-1.33,0Z"
                              transform="translate(263.56 78.47)"
                              fill="#fff"
                              stroke="rgba(0,0,0,0)"
                              strokeMiterlimit={10}
                              strokeWidth={1}
                            />
                          </g>
                          <g id="elektrik_diregi" transform="translate(1.772 1.772)">
                            <path
                              id="Path_190423"
                              data-name="Path 190423"
                              d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                              transform="translate(0.007 0.008)"
                              fill="#ffa530"
                            />
                            <g
                              id="Mask_Group_4510"
                              data-name="Mask Group 4510"
                              transform="translate(0 0)"
                              clipPath="url(#clip-path-2)"
                            >
                              <g id="Group_107540" data-name="Group 107540" transform="translate(7.724 11.398)">
                                <rect
                                  id="Rectangle_39362"
                                  data-name="Rectangle 39362"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  fill="#6d4c41"
                                />
                                <rect
                                  id="Rectangle_39363"
                                  data-name="Rectangle 39363"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  transform="translate(14.874)"
                                  fill="#6d4c41"
                                />
                                <path
                                  id="Path_190424"
                                  data-name="Path 190424"
                                  d="M2920.575,2197.053h-8.512v-1.287h16.158v1.287Z"
                                  transform="translate(-2912.057 -2194.386)"
                                  fill="#fff"
                                  fillRule="evenodd"
                                />
                              </g>
                              <g id="Group_107541" data-name="Group 107541" transform="translate(7.724 7.166)">
                                <rect
                                  id="Rectangle_39364"
                                  data-name="Rectangle 39364"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  fill="#6d4c41"
                                />
                                <rect
                                  id="Rectangle_39365"
                                  data-name="Rectangle 39365"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  transform="translate(14.874)"
                                  fill="#6d4c41"
                                />
                                <path
                                  id="Path_190425"
                                  data-name="Path 190425"
                                  d="M2920.575,2197.053h-8.512v-1.287h16.158v1.287Z"
                                  transform="translate(-2912.057 -2194.386)"
                                  fill="#fff"
                                  fillRule="evenodd"
                                />
                              </g>
                              <g id="Group_107542" data-name="Group 107542" transform="translate(12.824 5.053)">
                                <path
                                  id="Path_190426"
                                  data-name="Path 190426"
                                  d="M11.97,17.956V28.75c0,.245-.072.444-.161.445H6.161C6.072,29.194,6,29,6,28.75V2.953c0-.245.072-.444.161-.445A4.448,4.448,0,0,1,8.827,1.259a5.925,5.925,0,0,1,2.982,1.249c.089,0,.161.2.161.445Z"
                                  transform="translate(-6 -1.259)"
                                  fill="#5d4037"
                                />
                                <path
                                  id="Path_190427"
                                  data-name="Path 190427"
                                  d="M19.216,19.827v2.423H17.6c-1.6,0-2.164-1.279-2.164-2.856V-1.681a4.519,4.519,0,0,1,1.82.158,6.679,6.679,0,0,1,1.8,1.012.161.161,0,0,1,.161.159Z"
                                  transform="translate(-13.247 1.76)"
                                  fill="#6d4c41"
                                />
                                <path
                                  id="Path_190428"
                                  data-name="Path 190428"
                                  d="M-1112.064,1641.208v-5.883a.16.16,0,0,1,.161-.161.16.16,0,0,1,.161.161v5.883a.161.161,0,0,1-.161.161A.161.161,0,0,1-1112.064,1641.208Zm-1.613,0v-6.239a1.154,1.154,0,0,1-.484-1.094,1.155,1.155,0,0,1,.484-1.1v-11.807a.16.16,0,0,1,.161-.161.16.16,0,0,1,.161.161v11.807a1.155,1.155,0,0,1,.484,1.1,1.155,1.155,0,0,1-.484,1.094v6.239a.161.161,0,0,1-.161.161A.161.161,0,0,1-1113.677,1641.208Zm-1.614-.056v-3.171h.025a.16.16,0,0,1,.136-.074.16.16,0,0,1,.136.074h.025v3.171a.161.161,0,0,1-.161.161A.161.161,0,0,1-1115.291,1641.152Zm-.807-.864v-3.834a.161.161,0,0,1,.161-.161.161.161,0,0,1,.162.161v3.834a.163.163,0,0,1-.162.162A.162.162,0,0,1-1116.1,1640.288Zm0-4.641v-.161a.161.161,0,0,1,.161-.161.161.161,0,0,1,.162.161v.161a.163.163,0,0,1-.162.162A.162.162,0,0,1-1116.1,1635.647Zm0-.806v-14.965a.161.161,0,0,1,.161-.161.161.161,0,0,1,.162.161v14.965a.161.161,0,0,1-.162.161A.161.161,0,0,1-1116.1,1634.841Zm4.034-.161v-.162a.161.161,0,0,1,.161-.161.161.161,0,0,1,.161.161v.162a.161.161,0,0,1-.161.161A.161.161,0,0,1-1112.064,1634.68Zm0-.807v-16.811a.161.161,0,0,1,.161-.162.161.161,0,0,1,.161.162v16.811a.16.16,0,0,1-.161.161A.16.16,0,0,1-1112.064,1633.873Zm-3.227-1.613v-.161a.161.161,0,0,1,.161-.162.161.161,0,0,1,.161.162v.161a.16.16,0,0,1-.161.161A.16.16,0,0,1-1115.291,1632.259Zm0-.807v-9.962a.16.16,0,0,1,.161-.161.16.16,0,0,1,.161.161v9.962a.162.162,0,0,1-.161.162A.162.162,0,0,1-1115.291,1631.452Z"
                                  transform="translate(1116.905 -1614.446)"
                                  fill="#3e2723"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g id="inst-utility-pole-low-voltage-wood-2" data-name="inst-utility-pole-low-voltage-wood">
                      <rect
                        id="Rectangle_39366"
                        data-name="Rectangle 39366"
                        width="40.472"
                        height="40.472"
                        fill="#fff"
                        opacity={0}
                      />
                      <g id="Group_107549" data-name="Group 107549" transform="translate(2.444 0)">
                        <g id="Group_107548" data-name="Group 107548" transform="translate(0 0)">
                          <g transform="matrix(1, 0, 0, 1, -439.09, -136.98)" filter="url(#Union_456)">
                            <path
                              id="Union_456-2"
                              data-name="Union 456"
                              d="M17.127,40.174l-4.856-5.464a17.793,17.793,0,1,1,11.041,0l-4.855,5.464a.891.891,0,0,1-1.33,0Z"
                              transform="translate(439.09 136.98)"
                              fill="#fff"
                              stroke="rgba(0,0,0,0)"
                              strokeMiterlimit={10}
                              strokeWidth={1}
                            />
                          </g>
                          <g id="elektrik_diregi-2" data-name="elektrik_diregi" transform="translate(1.772 1.772)">
                            <path
                              id="Path_190430"
                              data-name="Path 190430"
                              d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                              transform="translate(0.007 0.008)"
                              fill="#ffa530"
                            />
                            <g
                              id="Mask_Group_4511"
                              data-name="Mask Group 4511"
                              transform="translate(0 0)"
                              clipPath="url(#clip-path-2)"
                            >
                              <g id="Group_107545" data-name="Group 107545" transform="translate(7.724 11.398)">
                                <rect
                                  id="Rectangle_39367"
                                  data-name="Rectangle 39367"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  fill="#6d4c41"
                                />
                                <rect
                                  id="Rectangle_39368"
                                  data-name="Rectangle 39368"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  transform="translate(14.874)"
                                  fill="#6d4c41"
                                />
                                <path
                                  id="Path_190431"
                                  data-name="Path 190431"
                                  d="M2920.575,2197.053h-8.512v-1.287h16.158v1.287Z"
                                  transform="translate(-2912.057 -2194.386)"
                                  fill="#fff"
                                  fillRule="evenodd"
                                />
                              </g>
                              <g id="Group_107546" data-name="Group 107546" transform="translate(7.724 7.166)">
                                <rect
                                  id="Rectangle_39369"
                                  data-name="Rectangle 39369"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  fill="#6d4c41"
                                />
                                <rect
                                  id="Rectangle_39370"
                                  data-name="Rectangle 39370"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  transform="translate(14.874)"
                                  fill="#6d4c41"
                                />
                                <path
                                  id="Path_190432"
                                  data-name="Path 190432"
                                  d="M2920.575,2197.053h-8.512v-1.287h16.158v1.287Z"
                                  transform="translate(-2912.057 -2194.386)"
                                  fill="#fff"
                                  fillRule="evenodd"
                                />
                              </g>
                              <g id="Group_107547" data-name="Group 107547" transform="translate(12.824 5.053)">
                                <path
                                  id="Path_190433"
                                  data-name="Path 190433"
                                  d="M11.97,17.956V28.75c0,.245-.072.444-.161.445H6.161C6.072,29.194,6,29,6,28.75V2.953c0-.245.072-.444.161-.445A4.448,4.448,0,0,1,8.827,1.259a5.925,5.925,0,0,1,2.982,1.249c.089,0,.161.2.161.445Z"
                                  transform="translate(-6 -1.259)"
                                  fill="#5d4037"
                                />
                                <path
                                  id="Path_190434"
                                  data-name="Path 190434"
                                  d="M19.216,19.827v2.423H17.6c-1.6,0-2.164-1.279-2.164-2.856V-1.681a4.519,4.519,0,0,1,1.82.158,6.679,6.679,0,0,1,1.8,1.012.161.161,0,0,1,.161.159Z"
                                  transform="translate(-13.247 1.76)"
                                  fill="#6d4c41"
                                />
                                <path
                                  id="Path_190435"
                                  data-name="Path 190435"
                                  d="M-1112.064,1641.208v-5.883a.16.16,0,0,1,.161-.161.16.16,0,0,1,.161.161v5.883a.161.161,0,0,1-.161.161A.161.161,0,0,1-1112.064,1641.208Zm-1.613,0v-6.239a1.154,1.154,0,0,1-.484-1.094,1.155,1.155,0,0,1,.484-1.1v-11.807a.16.16,0,0,1,.161-.161.16.16,0,0,1,.161.161v11.807a1.155,1.155,0,0,1,.484,1.1,1.155,1.155,0,0,1-.484,1.094v6.239a.161.161,0,0,1-.161.161A.161.161,0,0,1-1113.677,1641.208Zm-1.614-.056v-3.171h.025a.16.16,0,0,1,.136-.074.16.16,0,0,1,.136.074h.025v3.171a.161.161,0,0,1-.161.161A.161.161,0,0,1-1115.291,1641.152Zm-.807-.864v-3.834a.161.161,0,0,1,.161-.161.161.161,0,0,1,.162.161v3.834a.163.163,0,0,1-.162.162A.162.162,0,0,1-1116.1,1640.288Zm0-4.641v-.161a.161.161,0,0,1,.161-.161.161.161,0,0,1,.162.161v.161a.163.163,0,0,1-.162.162A.162.162,0,0,1-1116.1,1635.647Zm0-.806v-14.965a.161.161,0,0,1,.161-.161.161.161,0,0,1,.162.161v14.965a.161.161,0,0,1-.162.161A.161.161,0,0,1-1116.1,1634.841Zm4.034-.161v-.162a.161.161,0,0,1,.161-.161.161.161,0,0,1,.161.161v.162a.161.161,0,0,1-.161.161A.161.161,0,0,1-1112.064,1634.68Zm0-.807v-16.811a.161.161,0,0,1,.161-.162.161.161,0,0,1,.161.162v16.811a.16.16,0,0,1-.161.161A.16.16,0,0,1-1112.064,1633.873Zm-3.227-1.613v-.161a.161.161,0,0,1,.161-.162.161.161,0,0,1,.161.162v.161a.16.16,0,0,1-.161.161A.16.16,0,0,1-1115.291,1632.259Zm0-.807v-9.962a.16.16,0,0,1,.161-.161.16.16,0,0,1,.161.161v9.962a.162.162,0,0,1-.161.162A.162.162,0,0,1-1115.291,1631.452Z"
                                  transform="translate(1116.905 -1614.446)"
                                  fill="#3e2723"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g
                      id="inst-utility-pole-low-voltage-wood-3"
                      data-name="inst-utility-pole-low-voltage-wood"
                      style={{ '--t': 'translate(266.442px, 117.201px)' }}
                    >
                      <rect
                        id="Rectangle_39371"
                        data-name="Rectangle 39371"
                        width="40.472"
                        height="40.472"
                        fill="#fff"
                        opacity={0}
                      />
                      <g id="Group_107554" data-name="Group 107554" transform="translate(2.444 0)">
                        <g id="Group_107553" data-name="Group 107553" transform="translate(0 0)">
                          <g transform="matrix(1, 0, 0, 1, -104.79, -128.54)" filter="url(#Union_457)">
                            <path
                              id="Union_457-2"
                              data-name="Union 457"
                              d="M17.127,40.174l-4.856-5.464a17.793,17.793,0,1,1,11.041,0l-4.855,5.464a.891.891,0,0,1-1.33,0Z"
                              transform="translate(104.79 128.54)"
                              fill="#fff"
                              stroke="rgba(0,0,0,0)"
                              strokeMiterlimit={10}
                              strokeWidth={1}
                            />
                          </g>
                          <g id="elektrik_diregi-3" data-name="elektrik_diregi" transform="translate(1.772 1.772)">
                            <path
                              id="Path_190437"
                              data-name="Path 190437"
                              d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                              transform="translate(0.007 0.008)"
                              fill="#ffa530"
                            />
                            <g
                              id="Mask_Group_4512"
                              data-name="Mask Group 4512"
                              transform="translate(0 0)"
                              clipPath="url(#clip-path-2)"
                            >
                              <g id="Group_107550" data-name="Group 107550" transform="translate(7.724 11.398)">
                                <rect
                                  id="Rectangle_39372"
                                  data-name="Rectangle 39372"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  fill="#6d4c41"
                                />
                                <rect
                                  id="Rectangle_39373"
                                  data-name="Rectangle 39373"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  transform="translate(14.874)"
                                  fill="#6d4c41"
                                />
                                <path
                                  id="Path_190438"
                                  data-name="Path 190438"
                                  d="M2920.575,2197.053h-8.512v-1.287h16.158v1.287Z"
                                  transform="translate(-2912.057 -2194.386)"
                                  fill="#fff"
                                  fillRule="evenodd"
                                />
                              </g>
                              <g id="Group_107551" data-name="Group 107551" transform="translate(7.724 7.166)">
                                <rect
                                  id="Rectangle_39374"
                                  data-name="Rectangle 39374"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  fill="#6d4c41"
                                />
                                <rect
                                  id="Rectangle_39375"
                                  data-name="Rectangle 39375"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  transform="translate(14.874)"
                                  fill="#6d4c41"
                                />
                                <path
                                  id="Path_190439"
                                  data-name="Path 190439"
                                  d="M2920.575,2197.053h-8.512v-1.287h16.158v1.287Z"
                                  transform="translate(-2912.057 -2194.386)"
                                  fill="#fff"
                                  fillRule="evenodd"
                                />
                              </g>
                              <g id="Group_107552" data-name="Group 107552" transform="translate(12.824 5.053)">
                                <path
                                  id="Path_190440"
                                  data-name="Path 190440"
                                  d="M11.97,17.956V28.75c0,.245-.072.444-.161.445H6.161C6.072,29.194,6,29,6,28.75V2.953c0-.245.072-.444.161-.445A4.448,4.448,0,0,1,8.827,1.259a5.925,5.925,0,0,1,2.982,1.249c.089,0,.161.2.161.445Z"
                                  transform="translate(-6 -1.259)"
                                  fill="#5d4037"
                                />
                                <path
                                  id="Path_190441"
                                  data-name="Path 190441"
                                  d="M19.216,19.827v2.423H17.6c-1.6,0-2.164-1.279-2.164-2.856V-1.681a4.519,4.519,0,0,1,1.82.158,6.679,6.679,0,0,1,1.8,1.012.161.161,0,0,1,.161.159Z"
                                  transform="translate(-13.247 1.76)"
                                  fill="#6d4c41"
                                />
                                <path
                                  id="Path_190442"
                                  data-name="Path 190442"
                                  d="M-1112.064,1641.208v-5.883a.16.16,0,0,1,.161-.161.16.16,0,0,1,.161.161v5.883a.161.161,0,0,1-.161.161A.161.161,0,0,1-1112.064,1641.208Zm-1.613,0v-6.239a1.154,1.154,0,0,1-.484-1.094,1.155,1.155,0,0,1,.484-1.1v-11.807a.16.16,0,0,1,.161-.161.16.16,0,0,1,.161.161v11.807a1.155,1.155,0,0,1,.484,1.1,1.155,1.155,0,0,1-.484,1.094v6.239a.161.161,0,0,1-.161.161A.161.161,0,0,1-1113.677,1641.208Zm-1.614-.056v-3.171h.025a.16.16,0,0,1,.136-.074.16.16,0,0,1,.136.074h.025v3.171a.161.161,0,0,1-.161.161A.161.161,0,0,1-1115.291,1641.152Zm-.807-.864v-3.834a.161.161,0,0,1,.161-.161.161.161,0,0,1,.162.161v3.834a.163.163,0,0,1-.162.162A.162.162,0,0,1-1116.1,1640.288Zm0-4.641v-.161a.161.161,0,0,1,.161-.161.161.161,0,0,1,.162.161v.161a.163.163,0,0,1-.162.162A.162.162,0,0,1-1116.1,1635.647Zm0-.806v-14.965a.161.161,0,0,1,.161-.161.161.161,0,0,1,.162.161v14.965a.161.161,0,0,1-.162.161A.161.161,0,0,1-1116.1,1634.841Zm4.034-.161v-.162a.161.161,0,0,1,.161-.161.161.161,0,0,1,.161.161v.162a.161.161,0,0,1-.161.161A.161.161,0,0,1-1112.064,1634.68Zm0-.807v-16.811a.161.161,0,0,1,.161-.162.161.161,0,0,1,.161.162v16.811a.16.16,0,0,1-.161.161A.16.16,0,0,1-1112.064,1633.873Zm-3.227-1.613v-.161a.161.161,0,0,1,.161-.162.161.161,0,0,1,.161.162v.161a.16.16,0,0,1-.161.161A.16.16,0,0,1-1115.291,1632.259Zm0-.807v-9.962a.16.16,0,0,1,.161-.161.16.16,0,0,1,.161.161v9.962a.162.162,0,0,1-.161.162A.162.162,0,0,1-1115.291,1631.452Z"
                                  transform="translate(1116.905 -1614.446)"
                                  fill="#3e2723"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g
                      id="inst-utility-pole-low-voltage-wood-4"
                      data-name="inst-utility-pole-low-voltage-wood"
                      style={{ '--t': 'translate(244.098px, 318.731px)' }}
                    >
                      <rect
                        id="Rectangle_39376"
                        data-name="Rectangle 39376"
                        width="40.472"
                        height="40.472"
                        fill="#fff"
                        opacity={0}
                      />
                      <g id="Group_107559" data-name="Group 107559" transform="translate(2.444 0)">
                        <g id="Group_107558" data-name="Group 107558" transform="translate(0 0)">
                          <g transform="matrix(1, 0, 0, 1, -82.45, -330.07)" filter="url(#Union_458)">
                            <path
                              id="Union_458-2"
                              data-name="Union 458"
                              d="M17.127,40.174l-4.856-5.464a17.793,17.793,0,1,1,11.041,0l-4.855,5.464a.891.891,0,0,1-1.33,0Z"
                              transform="translate(82.45 330.07)"
                              fill="#fff"
                              stroke="rgba(0,0,0,0)"
                              strokeMiterlimit={10}
                              strokeWidth={1}
                            />
                          </g>
                          <g id="elektrik_diregi-4" data-name="elektrik_diregi" transform="translate(1.772 1.772)">
                            <path
                              id="Path_190444"
                              data-name="Path 190444"
                              d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                              transform="translate(0.007 0.008)"
                              fill="#ffa530"
                            />
                            <g
                              id="Mask_Group_4513"
                              data-name="Mask Group 4513"
                              transform="translate(0 0)"
                              clipPath="url(#clip-path-2)"
                            >
                              <g id="Group_107555" data-name="Group 107555" transform="translate(7.724 11.398)">
                                <rect
                                  id="Rectangle_39377"
                                  data-name="Rectangle 39377"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  fill="#6d4c41"
                                />
                                <rect
                                  id="Rectangle_39378"
                                  data-name="Rectangle 39378"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  transform="translate(14.874)"
                                  fill="#6d4c41"
                                />
                                <path
                                  id="Path_190445"
                                  data-name="Path 190445"
                                  d="M2920.575,2197.053h-8.512v-1.287h16.158v1.287Z"
                                  transform="translate(-2912.057 -2194.386)"
                                  fill="#fff"
                                  fillRule="evenodd"
                                />
                              </g>
                              <g id="Group_107556" data-name="Group 107556" transform="translate(7.724 7.166)">
                                <rect
                                  id="Rectangle_39379"
                                  data-name="Rectangle 39379"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  fill="#6d4c41"
                                />
                                <rect
                                  id="Rectangle_39380"
                                  data-name="Rectangle 39380"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  transform="translate(14.874)"
                                  fill="#6d4c41"
                                />
                                <path
                                  id="Path_190446"
                                  data-name="Path 190446"
                                  d="M2920.575,2197.053h-8.512v-1.287h16.158v1.287Z"
                                  transform="translate(-2912.057 -2194.386)"
                                  fill="#fff"
                                  fillRule="evenodd"
                                />
                              </g>
                              <g id="Group_107557" data-name="Group 107557" transform="translate(12.824 5.053)">
                                <path
                                  id="Path_190447"
                                  data-name="Path 190447"
                                  d="M11.97,17.956V28.75c0,.245-.072.444-.161.445H6.161C6.072,29.194,6,29,6,28.75V2.953c0-.245.072-.444.161-.445A4.448,4.448,0,0,1,8.827,1.259a5.925,5.925,0,0,1,2.982,1.249c.089,0,.161.2.161.445Z"
                                  transform="translate(-6 -1.259)"
                                  fill="#5d4037"
                                />
                                <path
                                  id="Path_190448"
                                  data-name="Path 190448"
                                  d="M19.216,19.827v2.423H17.6c-1.6,0-2.164-1.279-2.164-2.856V-1.681a4.519,4.519,0,0,1,1.82.158,6.679,6.679,0,0,1,1.8,1.012.161.161,0,0,1,.161.159Z"
                                  transform="translate(-13.247 1.76)"
                                  fill="#6d4c41"
                                />
                                <path
                                  id="Path_190449"
                                  data-name="Path 190449"
                                  d="M-1112.064,1641.208v-5.883a.16.16,0,0,1,.161-.161.16.16,0,0,1,.161.161v5.883a.161.161,0,0,1-.161.161A.161.161,0,0,1-1112.064,1641.208Zm-1.613,0v-6.239a1.154,1.154,0,0,1-.484-1.094,1.155,1.155,0,0,1,.484-1.1v-11.807a.16.16,0,0,1,.161-.161.16.16,0,0,1,.161.161v11.807a1.155,1.155,0,0,1,.484,1.1,1.155,1.155,0,0,1-.484,1.094v6.239a.161.161,0,0,1-.161.161A.161.161,0,0,1-1113.677,1641.208Zm-1.614-.056v-3.171h.025a.16.16,0,0,1,.136-.074.16.16,0,0,1,.136.074h.025v3.171a.161.161,0,0,1-.161.161A.161.161,0,0,1-1115.291,1641.152Zm-.807-.864v-3.834a.161.161,0,0,1,.161-.161.161.161,0,0,1,.162.161v3.834a.163.163,0,0,1-.162.162A.162.162,0,0,1-1116.1,1640.288Zm0-4.641v-.161a.161.161,0,0,1,.161-.161.161.161,0,0,1,.162.161v.161a.163.163,0,0,1-.162.162A.162.162,0,0,1-1116.1,1635.647Zm0-.806v-14.965a.161.161,0,0,1,.161-.161.161.161,0,0,1,.162.161v14.965a.161.161,0,0,1-.162.161A.161.161,0,0,1-1116.1,1634.841Zm4.034-.161v-.162a.161.161,0,0,1,.161-.161.161.161,0,0,1,.161.161v.162a.161.161,0,0,1-.161.161A.161.161,0,0,1-1112.064,1634.68Zm0-.807v-16.811a.161.161,0,0,1,.161-.162.161.161,0,0,1,.161.162v16.811a.16.16,0,0,1-.161.161A.16.16,0,0,1-1112.064,1633.873Zm-3.227-1.613v-.161a.161.161,0,0,1,.161-.162.161.161,0,0,1,.161.162v.161a.16.16,0,0,1-.161.161A.16.16,0,0,1-1115.291,1632.259Zm0-.807v-9.962a.16.16,0,0,1,.161-.161.16.16,0,0,1,.161.161v9.962a.162.162,0,0,1-.161.162A.162.162,0,0,1-1115.291,1631.452Z"
                                  transform="translate(1116.905 -1614.446)"
                                  fill="#3e2723"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g
                      id="inst-utility-pole-low-voltage-wood-5"
                      data-name="inst-utility-pole-low-voltage-wood"
                      style={{ '--t': 'translate(222.473px, 338.967px)' }}
                    >
                      <rect
                        id="Rectangle_39381"
                        data-name="Rectangle 39381"
                        width="40.472"
                        height="40.472"
                        fill="#fff"
                        opacity={0}
                      />
                      <g id="Group_107564" data-name="Group 107564" transform="translate(2.444 0)">
                        <g id="Group_107563" data-name="Group 107563" transform="translate(0 0)">
                          <g transform="matrix(1, 0, 0, 1, -60.82, -350.31)" filter="url(#Union_459)">
                            <path
                              id="Union_459-2"
                              data-name="Union 459"
                              d="M17.127,40.174l-4.856-5.464a17.793,17.793,0,1,1,11.041,0l-4.855,5.464a.891.891,0,0,1-1.33,0Z"
                              transform="translate(60.82 350.31)"
                              fill="#fff"
                              stroke="rgba(0,0,0,0)"
                              strokeMiterlimit={10}
                              strokeWidth={1}
                            />
                          </g>
                          <g id="elektrik_diregi-5" data-name="elektrik_diregi" transform="translate(1.772 1.772)">
                            <path
                              id="Path_190451"
                              data-name="Path 190451"
                              d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                              transform="translate(0.007 0.008)"
                              fill="#ffa530"
                            />
                            <g
                              id="Mask_Group_4514"
                              data-name="Mask Group 4514"
                              transform="translate(0 0)"
                              clipPath="url(#clip-path-2)"
                            >
                              <g id="Group_107560" data-name="Group 107560" transform="translate(7.724 11.398)">
                                <rect
                                  id="Rectangle_39382"
                                  data-name="Rectangle 39382"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  fill="#6d4c41"
                                />
                                <rect
                                  id="Rectangle_39383"
                                  data-name="Rectangle 39383"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  transform="translate(14.874)"
                                  fill="#6d4c41"
                                />
                                <path
                                  id="Path_190452"
                                  data-name="Path 190452"
                                  d="M2920.575,2197.053h-8.512v-1.287h16.158v1.287Z"
                                  transform="translate(-2912.057 -2194.386)"
                                  fill="#fff"
                                  fillRule="evenodd"
                                />
                              </g>
                              <g id="Group_107561" data-name="Group 107561" transform="translate(7.724 7.166)">
                                <rect
                                  id="Rectangle_39384"
                                  data-name="Rectangle 39384"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  fill="#6d4c41"
                                />
                                <rect
                                  id="Rectangle_39385"
                                  data-name="Rectangle 39385"
                                  width="1.278"
                                  height="2.624"
                                  rx="0.639"
                                  transform="translate(14.874)"
                                  fill="#6d4c41"
                                />
                                <path
                                  id="Path_190453"
                                  data-name="Path 190453"
                                  d="M2920.575,2197.053h-8.512v-1.287h16.158v1.287Z"
                                  transform="translate(-2912.057 -2194.386)"
                                  fill="#fff"
                                  fillRule="evenodd"
                                />
                              </g>
                              <g id="Group_107562" data-name="Group 107562" transform="translate(12.824 5.053)">
                                <path
                                  id="Path_190454"
                                  data-name="Path 190454"
                                  d="M11.97,17.956V28.75c0,.245-.072.444-.161.445H6.161C6.072,29.194,6,29,6,28.75V2.953c0-.245.072-.444.161-.445A4.448,4.448,0,0,1,8.827,1.259a5.925,5.925,0,0,1,2.982,1.249c.089,0,.161.2.161.445Z"
                                  transform="translate(-6 -1.259)"
                                  fill="#5d4037"
                                />
                                <path
                                  id="Path_190455"
                                  data-name="Path 190455"
                                  d="M19.216,19.827v2.423H17.6c-1.6,0-2.164-1.279-2.164-2.856V-1.681a4.519,4.519,0,0,1,1.82.158,6.679,6.679,0,0,1,1.8,1.012.161.161,0,0,1,.161.159Z"
                                  transform="translate(-13.247 1.76)"
                                  fill="#6d4c41"
                                />
                                <path
                                  id="Path_190456"
                                  data-name="Path 190456"
                                  d="M-1112.064,1641.208v-5.883a.16.16,0,0,1,.161-.161.16.16,0,0,1,.161.161v5.883a.161.161,0,0,1-.161.161A.161.161,0,0,1-1112.064,1641.208Zm-1.613,0v-6.239a1.154,1.154,0,0,1-.484-1.094,1.155,1.155,0,0,1,.484-1.1v-11.807a.16.16,0,0,1,.161-.161.16.16,0,0,1,.161.161v11.807a1.155,1.155,0,0,1,.484,1.1,1.155,1.155,0,0,1-.484,1.094v6.239a.161.161,0,0,1-.161.161A.161.161,0,0,1-1113.677,1641.208Zm-1.614-.056v-3.171h.025a.16.16,0,0,1,.136-.074.16.16,0,0,1,.136.074h.025v3.171a.161.161,0,0,1-.161.161A.161.161,0,0,1-1115.291,1641.152Zm-.807-.864v-3.834a.161.161,0,0,1,.161-.161.161.161,0,0,1,.162.161v3.834a.163.163,0,0,1-.162.162A.162.162,0,0,1-1116.1,1640.288Zm0-4.641v-.161a.161.161,0,0,1,.161-.161.161.161,0,0,1,.162.161v.161a.163.163,0,0,1-.162.162A.162.162,0,0,1-1116.1,1635.647Zm0-.806v-14.965a.161.161,0,0,1,.161-.161.161.161,0,0,1,.162.161v14.965a.161.161,0,0,1-.162.161A.161.161,0,0,1-1116.1,1634.841Zm4.034-.161v-.162a.161.161,0,0,1,.161-.161.161.161,0,0,1,.161.161v.162a.161.161,0,0,1-.161.161A.161.161,0,0,1-1112.064,1634.68Zm0-.807v-16.811a.161.161,0,0,1,.161-.162.161.161,0,0,1,.161.162v16.811a.16.16,0,0,1-.161.161A.16.16,0,0,1-1112.064,1633.873Zm-3.227-1.613v-.161a.161.161,0,0,1,.161-.162.161.161,0,0,1,.161.162v.161a.16.16,0,0,1-.161.161A.16.16,0,0,1-1115.291,1632.259Zm0-.807v-9.962a.16.16,0,0,1,.161-.161.16.16,0,0,1,.161.161v9.962a.162.162,0,0,1-.161.162A.162.162,0,0,1-1115.291,1631.452Z"
                                  transform="translate(1116.905 -1614.446)"
                                  fill="#3e2723"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g id="inst-utility-pole-low-voltage-concrote" style={{ '--t': 'translate(244.098px, 121.201px)' }}>
                      <rect
                        id="Rectangle_39386"
                        data-name="Rectangle 39386"
                        width="40.472"
                        height="40.472"
                        fill="#fff"
                        opacity={0}
                      />
                      <g transform="matrix(1, 0, 0, 1, -80, -132.54)" filter="url(#Path_190457)">
                        <path
                          id="Path_190457-2"
                          data-name="Path 190457"
                          d="M2814.125-8313.826l-4.856-5.464A17.8,17.8,0,0,1,2797-8336.208,17.79,17.79,0,0,1,2814.79-8354a17.79,17.79,0,0,1,17.793,17.792,17.8,17.8,0,0,1-12.273,16.918l-4.855,5.464a.891.891,0,0,1-.665.3A.891.891,0,0,1,2814.125-8313.826Z"
                          transform="translate(-2714.55 8486.54)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                      </g>
                      <path
                        id="Path_190458"
                        data-name="Path 190458"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.223 1.779)"
                        fill="#3083ff"
                      />
                      <g id="Group_107568" data-name="Group 107568" transform="translate(11.94 8.074)">
                        <path
                          id="Path_190459"
                          data-name="Path 190459"
                          d="M2912.257,2200.092h-.194v-4.326h.369v4.326Z"
                          transform="translate(-2911.608 -2188.194)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190460"
                          data-name="Path 190460"
                          d="M2912.257,2200.092h-.194v-4.326h.369v4.326Z"
                          transform="translate(-2896.769 -2188.194)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <g id="Group_107565" data-name="Group 107565" transform="translate(0 8.453)">
                          <rect
                            id="Rectangle_39387"
                            data-name="Rectangle 39387"
                            width="1.278"
                            height="0.968"
                            rx="0.484"
                            transform="translate(0 0)"
                            fill="#3d3d3d"
                          />
                          <rect
                            id="Rectangle_39388"
                            data-name="Rectangle 39388"
                            width="1.278"
                            height="0.577"
                            rx="0.289"
                            transform="translate(0 2.077)"
                            fill="#3d3d3d"
                          />
                          <rect
                            id="Rectangle_39389"
                            data-name="Rectangle 39389"
                            width="1.278"
                            height="0.577"
                            rx="0.289"
                            transform="translate(0 3.036)"
                            fill="#3d3d3d"
                          />
                          <rect
                            id="Rectangle_39390"
                            data-name="Rectangle 39390"
                            width="1.278"
                            height="0.968"
                            rx="0.484"
                            transform="translate(14.874 0)"
                            fill="#3d3d3d"
                          />
                          <rect
                            id="Rectangle_39391"
                            data-name="Rectangle 39391"
                            width="1.278"
                            height="0.577"
                            rx="0.289"
                            transform="translate(14.874 2.077)"
                            fill="#3d3d3d"
                          />
                          <rect
                            id="Rectangle_39392"
                            data-name="Rectangle 39392"
                            width="1.278"
                            height="0.577"
                            rx="0.289"
                            transform="translate(14.874 3.036)"
                            fill="#3d3d3d"
                          />
                        </g>
                        <g id="Group_107566" data-name="Group 107566" transform="translate(0 6.192)">
                          <rect
                            id="Rectangle_39393"
                            data-name="Rectangle 39393"
                            width="1.278"
                            height="2.624"
                            rx="0.639"
                            transform="translate(0 0)"
                            fill="#3d3d3d"
                          />
                          <rect
                            id="Rectangle_39394"
                            data-name="Rectangle 39394"
                            width="1.278"
                            height="2.624"
                            rx="0.639"
                            transform="translate(14.874 0)"
                            fill="#3d3d3d"
                          />
                          <path
                            id="Path_190461"
                            data-name="Path 190461"
                            d="M2920.575,2197.053h-8.512v-1.287h16.158v1.287Z"
                            transform="translate(-2912.057 -2194.386)"
                            fill="#fff"
                            fillRule="evenodd"
                          />
                        </g>
                        <g id="Group_107567" data-name="Group 107567" transform="translate(0 2.819)">
                          <rect
                            id="Rectangle_39395"
                            data-name="Rectangle 39395"
                            width="1.278"
                            height="2.624"
                            rx="0.639"
                            transform="translate(0 0)"
                            fill="#3d3d3d"
                          />
                          <rect
                            id="Rectangle_39396"
                            data-name="Rectangle 39396"
                            width="1.278"
                            height="2.624"
                            rx="0.639"
                            transform="translate(14.874 0)"
                            fill="#3d3d3d"
                          />
                          <path
                            id="Path_190462"
                            data-name="Path 190462"
                            d="M2920.575,2197.053h-8.512v-1.287h16.158v1.287Z"
                            transform="translate(-2912.057 -2194.386)"
                            fill="#fff"
                            fillRule="evenodd"
                          />
                        </g>
                        <path
                          id="Path_190463"
                          data-name="Path 190463"
                          d="M18.406,25.739a16.137,16.137,0,0,1-3.2-.319V.445c0-.244.072-.444.161-.445h5.647c.089,0,.161.2.161.445V25.5A16.174,16.174,0,0,1,18.406,25.739Z"
                          transform="translate(-10.109 0)"
                          fill="#e6eaee"
                        />
                        <path
                          id="Path_190464"
                          data-name="Path 190464"
                          d="M19.216,19.338v2.423H17.6c-1.6,0-2.164-1.279-2.164-2.856V-1h3.616a.161.161,0,0,1,.161.159Z"
                          transform="translate(-8.146 1)"
                          fill="#d8dee4"
                        />
                      </g>
                    </g>
                    <g
                      id="_inst-utility-pole-medium-concrete"
                      data-name=" inst-utility-pole-medium-concrete"
                      style={{ '--t': 'translate(312.395px, 44.688px)' }}
                    >
                      <rect
                        id="Rectangle_39397"
                        data-name="Rectangle 39397"
                        width="40.472"
                        height="40.472"
                        transform="translate(0)"
                        fill="#fff"
                        opacity={0}
                      />
                      <g transform="matrix(1, 0, 0, 1, -148.3, -56.03)" filter="url(#Path_190465)">
                        <path
                          id="Path_190465-2"
                          data-name="Path 190465"
                          d="M2814.125-8313.826l-4.856-5.464A17.8,17.8,0,0,1,2797-8336.208,17.79,17.79,0,0,1,2814.79-8354a17.79,17.79,0,0,1,17.793,17.792,17.8,17.8,0,0,1-12.273,16.918l-4.855,5.464a.891.891,0,0,1-.665.3A.891.891,0,0,1,2814.125-8313.826Z"
                          transform="translate(-2646.26 8410.03)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                      </g>
                      <path
                        id="Path_190466"
                        data-name="Path 190466"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.223 1.779)"
                        fill="#9830ff"
                      />
                      <g id="Group_107571" data-name="Group 107571" transform="translate(11.94 8.074)">
                        <path
                          id="Path_190467"
                          data-name="Path 190467"
                          d="M2912.257,2198.828h-.194v-3.062h.369v3.062Z"
                          transform="translate(-2911.608 -2191.566)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190468"
                          data-name="Path 190468"
                          d="M2912.257,2198.828h-.194v-3.062h.369v3.062Z"
                          transform="translate(-2896.769 -2191.566)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <g id="Group_107569" data-name="Group 107569" transform="translate(0 5.08)">
                          <rect
                            id="Rectangle_39398"
                            data-name="Rectangle 39398"
                            width="1.278"
                            height="0.968"
                            rx="0.484"
                            transform="translate(0 0)"
                            fill="#ffae35"
                          />
                          <rect
                            id="Rectangle_39399"
                            data-name="Rectangle 39399"
                            width="1.278"
                            height="0.577"
                            rx="0.289"
                            transform="translate(0 2.077)"
                            fill="#ffae35"
                          />
                          <rect
                            id="Rectangle_39400"
                            data-name="Rectangle 39400"
                            width="1.278"
                            height="0.968"
                            rx="0.484"
                            transform="translate(14.874 0)"
                            fill="#ffae35"
                          />
                          <rect
                            id="Rectangle_39401"
                            data-name="Rectangle 39401"
                            width="1.278"
                            height="0.577"
                            rx="0.289"
                            transform="translate(14.874 2.077)"
                            fill="#ffae35"
                          />
                        </g>
                        <g id="Group_107570" data-name="Group 107570" transform="translate(0 2.819)">
                          <rect
                            id="Rectangle_39402"
                            data-name="Rectangle 39402"
                            width="1.278"
                            height="2.624"
                            rx="0.639"
                            transform="translate(0 0)"
                            fill="#ffae35"
                          />
                          <rect
                            id="Rectangle_39403"
                            data-name="Rectangle 39403"
                            width="1.278"
                            height="2.624"
                            rx="0.639"
                            transform="translate(14.874 0)"
                            fill="#ffae35"
                          />
                          <path
                            id="Path_190469"
                            data-name="Path 190469"
                            d="M2920.575,2197.053h-8.512v-1.287h16.158v1.287Z"
                            transform="translate(-2912.057 -2194.386)"
                            fill="#fff"
                            fillRule="evenodd"
                          />
                        </g>
                        <path
                          id="Path_190470"
                          data-name="Path 190470"
                          d="M18.406,25.739a16.14,16.14,0,0,1-3.2-.319V.445c0-.244.072-.444.161-.445h5.647c.089,0,.161.2.161.445V25.5A16.173,16.173,0,0,1,18.406,25.739Z"
                          transform="translate(-10.109 0)"
                          fill="#e6eaee"
                        />
                        <path
                          id="Path_190471"
                          data-name="Path 190471"
                          d="M19.216,19.338v2.423H17.6c-1.6,0-2.164-1.279-2.164-2.856V-1h3.616a.161.161,0,0,1,.161.159Z"
                          transform="translate(-8.146 1)"
                          fill="#d8dee4"
                        />
                      </g>
                    </g>
                    <g id="inst-tree" style={{ '--t': 'translate(342.298px, 91.513px)' }}>
                      <rect
                        id="Rectangle_39404"
                        data-name="Rectangle 39404"
                        width="40.472"
                        height="40.472"
                        transform="translate(0 0)"
                        fill="#fff"
                        opacity={0}
                      />
                      <g transform="matrix(1, 0, 0, 1, -178.2, -102.86)" filter="url(#Union_460)">
                        <path
                          id="Union_460-2"
                          data-name="Union 460"
                          d="M17.127,40.173,12.271,34.71a17.792,17.792,0,1,1,11.041,0l-4.855,5.463a.89.89,0,0,1-1.33,0Z"
                          transform="translate(180.65 102.86)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                      </g>
                      <path
                        id="Path_190473"
                        data-name="Path 190473"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.223 1.779)"
                        fill="#82c635"
                      />
                      <path
                        id="Path_190474"
                        data-name="Path 190474"
                        d="M2919.288-331.842a7.845,7.845,0,0,1,5.315,3.19,4.941,4.941,0,0,1,0,5.619,8.227,8.227,0,0,1,3.307,4.689,9.51,9.51,0,0,1-.969,5.739l.635.475s-4.824,2.887-6.113,1.321c-.761-.924-5.205-.518-5.854-2.032-.6-1.405-2.437-2.49-2.468-4.257-.041-2.312,1.713-4.04,2.468-5.935a6.566,6.566,0,0,0,.193-3.45c-.186-.3.878-1.675.581-1.935s1.113-1.388.629-1.5,1.31-.822.677-.822S2919.288-331.842,2919.288-331.842Z"
                        transform="translate(-2902.318 339.397)"
                        opacity="0.1"
                      />
                      <path
                        id="Path_190475"
                        data-name="Path 190475"
                        d="M2948.886-335.475a7.846,7.846,0,0,1,5.315,3.19,4.941,4.941,0,0,1,0,5.619,8.227,8.227,0,0,1,3.308,4.689,9.513,9.513,0,0,1-.97,5.739l.635.475a5.946,5.946,0,0,0,1.377-.893c.186-.3,1.451-2.977,1.451-2.977l.707-2.642a29.363,29.363,0,0,0-1.079-2.828c-.223-.3-1.6-1.563-1.6-1.563l-.521-.335a5.329,5.329,0,0,1,0-1.377c.111-.447.261-2.493.261-2.642a15.553,15.553,0,0,0-.819-2.27,21.782,21.782,0,0,0-1.824-1.9,9.9,9.9,0,0,0-2.307-.856,16,16,0,0,0-2.419-.186A3.23,3.23,0,0,0,2948.886-335.475Z"
                        transform="translate(-2931.916 343.03)"
                        opacity="0.17"
                      />
                      <path
                        id="Path_190476"
                        data-name="Path 190476"
                        d="M10.25,27.558h-.043c-.464,0-.933-.02-1.394-.06v-4.21l-.118-.012-.274-.027a12.268,12.268,0,0,1-3.758-1.036A8.855,8.855,0,0,1,1.8,20.129,7.143,7.143,0,0,1,.964,19,6.963,6.963,0,0,1,.1,14.3,7.225,7.225,0,0,1,3.1,9.555,10.117,10.117,0,0,1,2.763,7.99,7.4,7.4,0,0,1,2.75,6.07,6.932,6.932,0,0,1,4.855,1.842,6.852,6.852,0,0,1,9.212.008,6.725,6.725,0,0,1,13.1,1.013a6.935,6.935,0,0,1,2.639,3.06v0A7.158,7.158,0,0,1,16.381,7a8.168,8.168,0,0,1-.408,2.58,7.381,7.381,0,0,1,2.834,3.8,6.814,6.814,0,0,1-.426,5.109,8.33,8.33,0,0,1-3.215,3.321,10.959,10.959,0,0,1-4.788,1.471l-.127.008v4.268h0Zm2.9-11.486a.713.713,0,0,1-.329.6l-2.566,1.662v3.637l.035,0A9.637,9.637,0,0,0,14.5,20.681a7.015,7.015,0,0,0,2.712-2.788,5.5,5.5,0,0,0,.344-4.123,6.213,6.213,0,0,0-2.717-3.38l-.455-.288.19-.5a7.078,7.078,0,0,0,.5-2.595,5.861,5.861,0,0,0-.532-2.39h0A5.63,5.63,0,0,0,12.4,2.127a5.408,5.408,0,0,0-3.129-.81A5.536,5.536,0,0,0,5.754,2.8,5.641,5.641,0,0,0,4.05,6.24a6.064,6.064,0,0,0,.013,1.581,9.138,9.138,0,0,0,.436,1.8l.175.506-.46.272A5.878,5.878,0,0,0,1.39,14.509a5.663,5.663,0,0,0,.7,3.822,5.86,5.86,0,0,0,.678.926,7.539,7.539,0,0,0,2.445,1.77,10.959,10.959,0,0,0,3.357.918l.238.026V14.023L6.2,12.326a.72.72,0,1,1,.784-1.207l1.833,1.193V9.105a.719.719,0,1,1,1.438,0v7.52l1.783-1.157a.72.72,0,0,1,1.112.6Z"
                        transform="translate(10.118 6.169)"
                        fill="#40780a"
                        stroke="rgba(0,0,0,0)"
                        strokeWidth={1}
                      />
                    </g>
                    <g id="inst-tree-2" data-name="inst-tree" style={{ '--t': 'translate(367.298px, 85.16px)' }}>
                      <rect
                        id="Rectangle_39405"
                        data-name="Rectangle 39405"
                        width="40.472"
                        height="40.472"
                        transform="translate(0 0)"
                        fill="#fff"
                        opacity={0}
                      />
                      <g transform="matrix(1, 0, 0, 1, -203.2, -96.5)" filter="url(#Union_461)">
                        <path
                          id="Union_461-2"
                          data-name="Union 461"
                          d="M17.127,40.173,12.271,34.71a17.792,17.792,0,1,1,11.041,0l-4.855,5.463a.89.89,0,0,1-1.33,0Z"
                          transform="translate(205.65 96.5)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                      </g>
                      <path
                        id="Path_190478"
                        data-name="Path 190478"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.223 1.779)"
                        fill="#82c635"
                      />
                      <path
                        id="Path_190479"
                        data-name="Path 190479"
                        d="M2919.288-331.842a7.845,7.845,0,0,1,5.315,3.19,4.941,4.941,0,0,1,0,5.619,8.227,8.227,0,0,1,3.307,4.689,9.51,9.51,0,0,1-.969,5.739l.635.475s-4.824,2.887-6.113,1.321c-.761-.924-5.205-.518-5.854-2.032-.6-1.405-2.437-2.49-2.468-4.257-.041-2.312,1.713-4.04,2.468-5.935a6.566,6.566,0,0,0,.193-3.45c-.186-.3.878-1.675.581-1.935s1.113-1.388.629-1.5,1.31-.822.677-.822S2919.288-331.842,2919.288-331.842Z"
                        transform="translate(-2902.318 339.397)"
                        opacity="0.1"
                      />
                      <path
                        id="Path_190480"
                        data-name="Path 190480"
                        d="M2948.886-335.475a7.846,7.846,0,0,1,5.315,3.19,4.941,4.941,0,0,1,0,5.619,8.227,8.227,0,0,1,3.308,4.689,9.513,9.513,0,0,1-.97,5.739l.635.475a5.946,5.946,0,0,0,1.377-.893c.186-.3,1.451-2.977,1.451-2.977l.707-2.642a29.363,29.363,0,0,0-1.079-2.828c-.223-.3-1.6-1.563-1.6-1.563l-.521-.335a5.329,5.329,0,0,1,0-1.377c.111-.447.261-2.493.261-2.642a15.553,15.553,0,0,0-.819-2.27,21.782,21.782,0,0,0-1.824-1.9,9.9,9.9,0,0,0-2.307-.856,16,16,0,0,0-2.419-.186A3.23,3.23,0,0,0,2948.886-335.475Z"
                        transform="translate(-2931.916 343.03)"
                        opacity="0.17"
                      />
                      <path
                        id="Path_190481"
                        data-name="Path 190481"
                        d="M10.25,27.558h-.043c-.464,0-.933-.02-1.394-.06v-4.21l-.118-.012-.274-.027a12.268,12.268,0,0,1-3.758-1.036A8.855,8.855,0,0,1,1.8,20.129,7.143,7.143,0,0,1,.964,19,6.963,6.963,0,0,1,.1,14.3,7.225,7.225,0,0,1,3.1,9.555,10.117,10.117,0,0,1,2.763,7.99,7.4,7.4,0,0,1,2.75,6.07,6.932,6.932,0,0,1,4.855,1.842,6.852,6.852,0,0,1,9.212.008,6.725,6.725,0,0,1,13.1,1.013a6.935,6.935,0,0,1,2.639,3.06v0A7.158,7.158,0,0,1,16.381,7a8.168,8.168,0,0,1-.408,2.58,7.381,7.381,0,0,1,2.834,3.8,6.814,6.814,0,0,1-.426,5.109,8.33,8.33,0,0,1-3.215,3.321,10.959,10.959,0,0,1-4.788,1.471l-.127.008v4.268h0Zm2.9-11.486a.713.713,0,0,1-.329.6l-2.566,1.662v3.637l.035,0A9.637,9.637,0,0,0,14.5,20.681a7.015,7.015,0,0,0,2.712-2.788,5.5,5.5,0,0,0,.344-4.123,6.213,6.213,0,0,0-2.717-3.38l-.455-.288.19-.5a7.078,7.078,0,0,0,.5-2.595,5.861,5.861,0,0,0-.532-2.39h0A5.63,5.63,0,0,0,12.4,2.127a5.408,5.408,0,0,0-3.129-.81A5.536,5.536,0,0,0,5.754,2.8,5.641,5.641,0,0,0,4.05,6.24a6.064,6.064,0,0,0,.013,1.581,9.138,9.138,0,0,0,.436,1.8l.175.506-.46.272A5.878,5.878,0,0,0,1.39,14.509a5.663,5.663,0,0,0,.7,3.822,5.86,5.86,0,0,0,.678.926,7.539,7.539,0,0,0,2.445,1.77,10.959,10.959,0,0,0,3.357.918l.238.026V14.023L6.2,12.326a.72.72,0,1,1,.784-1.207l1.833,1.193V9.105a.719.719,0,1,1,1.438,0v7.52l1.783-1.157a.72.72,0,0,1,1.112.6Z"
                        transform="translate(10.118 6.169)"
                        fill="#40780a"
                        stroke="rgba(0,0,0,0)"
                        strokeWidth={1}
                      />
                    </g>
                    <g id="inst-tree-3" data-name="inst-tree" style={{ '--t': 'translate(382.771px, 91.513px)' }}>
                      <rect
                        id="Rectangle_39406"
                        data-name="Rectangle 39406"
                        width="40.472"
                        height="40.472"
                        transform="translate(0 0)"
                        fill="#fff"
                        opacity={0}
                      />
                      <g transform="matrix(1, 0, 0, 1, -218.67, -102.86)" filter="url(#Union_462)">
                        <path
                          id="Union_462-2"
                          data-name="Union 462"
                          d="M17.127,40.173,12.271,34.71a17.792,17.792,0,1,1,11.041,0l-4.855,5.463a.89.89,0,0,1-1.33,0Z"
                          transform="translate(221.12 102.86)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                      </g>
                      <path
                        id="Path_190483"
                        data-name="Path 190483"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.223 1.779)"
                        fill="#82c635"
                      />
                      <path
                        id="Path_190484"
                        data-name="Path 190484"
                        d="M2919.288-331.842a7.845,7.845,0,0,1,5.315,3.19,4.941,4.941,0,0,1,0,5.619,8.227,8.227,0,0,1,3.307,4.689,9.51,9.51,0,0,1-.969,5.739l.635.475s-4.824,2.887-6.113,1.321c-.761-.924-5.205-.518-5.854-2.032-.6-1.405-2.437-2.49-2.468-4.257-.041-2.312,1.713-4.04,2.468-5.935a6.566,6.566,0,0,0,.193-3.45c-.186-.3.878-1.675.581-1.935s1.113-1.388.629-1.5,1.31-.822.677-.822S2919.288-331.842,2919.288-331.842Z"
                        transform="translate(-2902.318 339.397)"
                        opacity="0.1"
                      />
                      <path
                        id="Path_190485"
                        data-name="Path 190485"
                        d="M2948.886-335.475a7.846,7.846,0,0,1,5.315,3.19,4.941,4.941,0,0,1,0,5.619,8.227,8.227,0,0,1,3.308,4.689,9.513,9.513,0,0,1-.97,5.739l.635.475a5.946,5.946,0,0,0,1.377-.893c.186-.3,1.451-2.977,1.451-2.977l.707-2.642a29.363,29.363,0,0,0-1.079-2.828c-.223-.3-1.6-1.563-1.6-1.563l-.521-.335a5.329,5.329,0,0,1,0-1.377c.111-.447.261-2.493.261-2.642a15.553,15.553,0,0,0-.819-2.27,21.782,21.782,0,0,0-1.824-1.9,9.9,9.9,0,0,0-2.307-.856,16,16,0,0,0-2.419-.186A3.23,3.23,0,0,0,2948.886-335.475Z"
                        transform="translate(-2931.916 343.03)"
                        opacity="0.17"
                      />
                      <path
                        id="Path_190486"
                        data-name="Path 190486"
                        d="M10.25,27.558h-.043c-.464,0-.933-.02-1.394-.06v-4.21l-.118-.012-.274-.027a12.268,12.268,0,0,1-3.758-1.036A8.855,8.855,0,0,1,1.8,20.129,7.143,7.143,0,0,1,.964,19,6.963,6.963,0,0,1,.1,14.3,7.225,7.225,0,0,1,3.1,9.555,10.117,10.117,0,0,1,2.763,7.99,7.4,7.4,0,0,1,2.75,6.07,6.932,6.932,0,0,1,4.855,1.842,6.852,6.852,0,0,1,9.212.008,6.725,6.725,0,0,1,13.1,1.013a6.935,6.935,0,0,1,2.639,3.06v0A7.158,7.158,0,0,1,16.381,7a8.168,8.168,0,0,1-.408,2.58,7.381,7.381,0,0,1,2.834,3.8,6.814,6.814,0,0,1-.426,5.109,8.33,8.33,0,0,1-3.215,3.321,10.959,10.959,0,0,1-4.788,1.471l-.127.008v4.268h0Zm2.9-11.486a.713.713,0,0,1-.329.6l-2.566,1.662v3.637l.035,0A9.637,9.637,0,0,0,14.5,20.681a7.015,7.015,0,0,0,2.712-2.788,5.5,5.5,0,0,0,.344-4.123,6.213,6.213,0,0,0-2.717-3.38l-.455-.288.19-.5a7.078,7.078,0,0,0,.5-2.595,5.861,5.861,0,0,0-.532-2.39h0A5.63,5.63,0,0,0,12.4,2.127a5.408,5.408,0,0,0-3.129-.81A5.536,5.536,0,0,0,5.754,2.8,5.641,5.641,0,0,0,4.05,6.24a6.064,6.064,0,0,0,.013,1.581,9.138,9.138,0,0,0,.436,1.8l.175.506-.46.272A5.878,5.878,0,0,0,1.39,14.509a5.663,5.663,0,0,0,.7,3.822,5.86,5.86,0,0,0,.678.926,7.539,7.539,0,0,0,2.445,1.77,10.959,10.959,0,0,0,3.357.918l.238.026V14.023L6.2,12.326a.72.72,0,1,1,.784-1.207l1.833,1.193V9.105a.719.719,0,1,1,1.438,0v7.52l1.783-1.157a.72.72,0,0,1,1.112.6Z"
                        transform="translate(10.118 6.169)"
                        fill="#40780a"
                        stroke="rgba(0,0,0,0)"
                        strokeWidth={1}
                      />
                    </g>
                    <g id="inst-tree-4" data-name="inst-tree" style={{ '--t': 'translate(492.771px, 64.924px)' }}>
                      <rect
                        id="Rectangle_39407"
                        data-name="Rectangle 39407"
                        width="40.472"
                        height="40.472"
                        transform="translate(0 0)"
                        fill="#fff"
                        opacity={0}
                      />
                      <g transform="matrix(1, 0, 0, 1, -328.67, -76.27)" filter="url(#Union_463)">
                        <path
                          id="Union_463-2"
                          data-name="Union 463"
                          d="M17.127,40.173,12.271,34.71a17.792,17.792,0,1,1,11.041,0l-4.855,5.463a.89.89,0,0,1-1.33,0Z"
                          transform="translate(331.12 76.27)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                      </g>
                      <path
                        id="Path_190488"
                        data-name="Path 190488"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.223 1.779)"
                        fill="#82c635"
                      />
                      <path
                        id="Path_190489"
                        data-name="Path 190489"
                        d="M2919.288-331.842a7.845,7.845,0,0,1,5.315,3.19,4.941,4.941,0,0,1,0,5.619,8.227,8.227,0,0,1,3.307,4.689,9.51,9.51,0,0,1-.969,5.739l.635.475s-4.824,2.887-6.113,1.321c-.761-.924-5.205-.518-5.854-2.032-.6-1.405-2.437-2.49-2.468-4.257-.041-2.312,1.713-4.04,2.468-5.935a6.566,6.566,0,0,0,.193-3.45c-.186-.3.878-1.675.581-1.935s1.113-1.388.629-1.5,1.31-.822.677-.822S2919.288-331.842,2919.288-331.842Z"
                        transform="translate(-2902.318 339.397)"
                        opacity="0.1"
                      />
                      <path
                        id="Path_190490"
                        data-name="Path 190490"
                        d="M2948.886-335.475a7.846,7.846,0,0,1,5.315,3.19,4.941,4.941,0,0,1,0,5.619,8.227,8.227,0,0,1,3.308,4.689,9.513,9.513,0,0,1-.97,5.739l.635.475a5.946,5.946,0,0,0,1.377-.893c.186-.3,1.451-2.977,1.451-2.977l.707-2.642a29.363,29.363,0,0,0-1.079-2.828c-.223-.3-1.6-1.563-1.6-1.563l-.521-.335a5.329,5.329,0,0,1,0-1.377c.111-.447.261-2.493.261-2.642a15.553,15.553,0,0,0-.819-2.27,21.782,21.782,0,0,0-1.824-1.9,9.9,9.9,0,0,0-2.307-.856,16,16,0,0,0-2.419-.186A3.23,3.23,0,0,0,2948.886-335.475Z"
                        transform="translate(-2931.916 343.03)"
                        opacity="0.17"
                      />
                      <path
                        id="Path_190491"
                        data-name="Path 190491"
                        d="M10.25,27.558h-.043c-.464,0-.933-.02-1.394-.06v-4.21l-.118-.012-.274-.027a12.268,12.268,0,0,1-3.758-1.036A8.855,8.855,0,0,1,1.8,20.129,7.143,7.143,0,0,1,.964,19,6.963,6.963,0,0,1,.1,14.3,7.225,7.225,0,0,1,3.1,9.555,10.117,10.117,0,0,1,2.763,7.99,7.4,7.4,0,0,1,2.75,6.07,6.932,6.932,0,0,1,4.855,1.842,6.852,6.852,0,0,1,9.212.008,6.725,6.725,0,0,1,13.1,1.013a6.935,6.935,0,0,1,2.639,3.06v0A7.158,7.158,0,0,1,16.381,7a8.168,8.168,0,0,1-.408,2.58,7.381,7.381,0,0,1,2.834,3.8,6.814,6.814,0,0,1-.426,5.109,8.33,8.33,0,0,1-3.215,3.321,10.959,10.959,0,0,1-4.788,1.471l-.127.008v4.268h0Zm2.9-11.486a.713.713,0,0,1-.329.6l-2.566,1.662v3.637l.035,0A9.637,9.637,0,0,0,14.5,20.681a7.015,7.015,0,0,0,2.712-2.788,5.5,5.5,0,0,0,.344-4.123,6.213,6.213,0,0,0-2.717-3.38l-.455-.288.19-.5a7.078,7.078,0,0,0,.5-2.595,5.861,5.861,0,0,0-.532-2.39h0A5.63,5.63,0,0,0,12.4,2.127a5.408,5.408,0,0,0-3.129-.81A5.536,5.536,0,0,0,5.754,2.8,5.641,5.641,0,0,0,4.05,6.24a6.064,6.064,0,0,0,.013,1.581,9.138,9.138,0,0,0,.436,1.8l.175.506-.46.272A5.878,5.878,0,0,0,1.39,14.509a5.663,5.663,0,0,0,.7,3.822,5.86,5.86,0,0,0,.678.926,7.539,7.539,0,0,0,2.445,1.77,10.959,10.959,0,0,0,3.357.918l.238.026V14.023L6.2,12.326a.72.72,0,1,1,.784-1.207l1.833,1.193V9.105a.719.719,0,1,1,1.438,0v7.52l1.783-1.157a.72.72,0,0,1,1.112.6Z"
                        transform="translate(10.118 6.169)"
                        fill="#40780a"
                        stroke="rgba(0,0,0,0)"
                        strokeWidth={1}
                      />
                    </g>
                    <g id="inst-tree-5" data-name="inst-tree" style={{ '--t': 'translate(689.771px, 131.985px)' }}>
                      <rect
                        id="Rectangle_39408"
                        data-name="Rectangle 39408"
                        width="40.472"
                        height="40.472"
                        transform="translate(0 0)"
                        fill="#fff"
                        opacity={0}
                      />
                      <g transform="matrix(1, 0, 0, 1, -525.67, -143.33)" filter="url(#Union_464)">
                        <path
                          id="Union_464-2"
                          data-name="Union 464"
                          d="M17.127,40.173,12.271,34.71a17.792,17.792,0,1,1,11.041,0l-4.855,5.463a.89.89,0,0,1-1.33,0Z"
                          transform="translate(528.12 143.33)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                      </g>
                      <path
                        id="Path_190493"
                        data-name="Path 190493"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.223 1.779)"
                        fill="#82c635"
                      />
                      <path
                        id="Path_190494"
                        data-name="Path 190494"
                        d="M2919.288-331.842a7.845,7.845,0,0,1,5.315,3.19,4.941,4.941,0,0,1,0,5.619,8.227,8.227,0,0,1,3.307,4.689,9.51,9.51,0,0,1-.969,5.739l.635.475s-4.824,2.887-6.113,1.321c-.761-.924-5.205-.518-5.854-2.032-.6-1.405-2.437-2.49-2.468-4.257-.041-2.312,1.713-4.04,2.468-5.935a6.566,6.566,0,0,0,.193-3.45c-.186-.3.878-1.675.581-1.935s1.113-1.388.629-1.5,1.31-.822.677-.822S2919.288-331.842,2919.288-331.842Z"
                        transform="translate(-2902.318 339.397)"
                        opacity="0.1"
                      />
                      <path
                        id="Path_190495"
                        data-name="Path 190495"
                        d="M2948.886-335.475a7.846,7.846,0,0,1,5.315,3.19,4.941,4.941,0,0,1,0,5.619,8.227,8.227,0,0,1,3.308,4.689,9.513,9.513,0,0,1-.97,5.739l.635.475a5.946,5.946,0,0,0,1.377-.893c.186-.3,1.451-2.977,1.451-2.977l.707-2.642a29.363,29.363,0,0,0-1.079-2.828c-.223-.3-1.6-1.563-1.6-1.563l-.521-.335a5.329,5.329,0,0,1,0-1.377c.111-.447.261-2.493.261-2.642a15.553,15.553,0,0,0-.819-2.27,21.782,21.782,0,0,0-1.824-1.9,9.9,9.9,0,0,0-2.307-.856,16,16,0,0,0-2.419-.186A3.23,3.23,0,0,0,2948.886-335.475Z"
                        transform="translate(-2931.916 343.03)"
                        opacity="0.17"
                      />
                      <path
                        id="Path_190496"
                        data-name="Path 190496"
                        d="M10.25,27.558h-.043c-.464,0-.933-.02-1.394-.06v-4.21l-.118-.012-.274-.027a12.268,12.268,0,0,1-3.758-1.036A8.855,8.855,0,0,1,1.8,20.129,7.143,7.143,0,0,1,.964,19,6.963,6.963,0,0,1,.1,14.3,7.225,7.225,0,0,1,3.1,9.555,10.117,10.117,0,0,1,2.763,7.99,7.4,7.4,0,0,1,2.75,6.07,6.932,6.932,0,0,1,4.855,1.842,6.852,6.852,0,0,1,9.212.008,6.725,6.725,0,0,1,13.1,1.013a6.935,6.935,0,0,1,2.639,3.06v0A7.158,7.158,0,0,1,16.381,7a8.168,8.168,0,0,1-.408,2.58,7.381,7.381,0,0,1,2.834,3.8,6.814,6.814,0,0,1-.426,5.109,8.33,8.33,0,0,1-3.215,3.321,10.959,10.959,0,0,1-4.788,1.471l-.127.008v4.268h0Zm2.9-11.486a.713.713,0,0,1-.329.6l-2.566,1.662v3.637l.035,0A9.637,9.637,0,0,0,14.5,20.681a7.015,7.015,0,0,0,2.712-2.788,5.5,5.5,0,0,0,.344-4.123,6.213,6.213,0,0,0-2.717-3.38l-.455-.288.19-.5a7.078,7.078,0,0,0,.5-2.595,5.861,5.861,0,0,0-.532-2.39h0A5.63,5.63,0,0,0,12.4,2.127a5.408,5.408,0,0,0-3.129-.81A5.536,5.536,0,0,0,5.754,2.8,5.641,5.641,0,0,0,4.05,6.24a6.064,6.064,0,0,0,.013,1.581,9.138,9.138,0,0,0,.436,1.8l.175.506-.46.272A5.878,5.878,0,0,0,1.39,14.509a5.663,5.663,0,0,0,.7,3.822,5.86,5.86,0,0,0,.678.926,7.539,7.539,0,0,0,2.445,1.77,10.959,10.959,0,0,0,3.357.918l.238.026V14.023L6.2,12.326a.72.72,0,1,1,.784-1.207l1.833,1.193V9.105a.719.719,0,1,1,1.438,0v7.52l1.783-1.157a.72.72,0,0,1,1.112.6Z"
                        transform="translate(10.118 6.169)"
                        fill="#40780a"
                        stroke="rgba(0,0,0,0)"
                        strokeWidth={1}
                      />
                    </g>
                    <g id="inst-tree-6" data-name="inst-tree" style={{ '--t': 'translate(555.771px, 85.16px)' }}>
                      <rect
                        id="Rectangle_39409"
                        data-name="Rectangle 39409"
                        width="40.472"
                        height="40.472"
                        transform="translate(0 0)"
                        fill="#fff"
                        opacity={0}
                      />
                      <g transform="matrix(1, 0, 0, 1, -391.67, -96.5)" filter="url(#Union_465)">
                        <path
                          id="Union_465-2"
                          data-name="Union 465"
                          d="M17.127,40.173,12.271,34.71a17.792,17.792,0,1,1,11.041,0l-4.855,5.463a.89.89,0,0,1-1.33,0Z"
                          transform="translate(394.12 96.5)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                      </g>
                      <path
                        id="Path_190498"
                        data-name="Path 190498"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.223 1.779)"
                        fill="#82c635"
                      />
                      <path
                        id="Path_190499"
                        data-name="Path 190499"
                        d="M2919.288-331.842a7.845,7.845,0,0,1,5.315,3.19,4.941,4.941,0,0,1,0,5.619,8.227,8.227,0,0,1,3.307,4.689,9.51,9.51,0,0,1-.969,5.739l.635.475s-4.824,2.887-6.113,1.321c-.761-.924-5.205-.518-5.854-2.032-.6-1.405-2.437-2.49-2.468-4.257-.041-2.312,1.713-4.04,2.468-5.935a6.566,6.566,0,0,0,.193-3.45c-.186-.3.878-1.675.581-1.935s1.113-1.388.629-1.5,1.31-.822.677-.822S2919.288-331.842,2919.288-331.842Z"
                        transform="translate(-2902.318 339.397)"
                        opacity="0.1"
                      />
                      <path
                        id="Path_190500"
                        data-name="Path 190500"
                        d="M2948.886-335.475a7.846,7.846,0,0,1,5.315,3.19,4.941,4.941,0,0,1,0,5.619,8.227,8.227,0,0,1,3.308,4.689,9.513,9.513,0,0,1-.97,5.739l.635.475a5.946,5.946,0,0,0,1.377-.893c.186-.3,1.451-2.977,1.451-2.977l.707-2.642a29.363,29.363,0,0,0-1.079-2.828c-.223-.3-1.6-1.563-1.6-1.563l-.521-.335a5.329,5.329,0,0,1,0-1.377c.111-.447.261-2.493.261-2.642a15.553,15.553,0,0,0-.819-2.27,21.782,21.782,0,0,0-1.824-1.9,9.9,9.9,0,0,0-2.307-.856,16,16,0,0,0-2.419-.186A3.23,3.23,0,0,0,2948.886-335.475Z"
                        transform="translate(-2931.916 343.03)"
                        opacity="0.17"
                      />
                      <path
                        id="Path_190501"
                        data-name="Path 190501"
                        d="M10.25,27.558h-.043c-.464,0-.933-.02-1.394-.06v-4.21l-.118-.012-.274-.027a12.268,12.268,0,0,1-3.758-1.036A8.855,8.855,0,0,1,1.8,20.129,7.143,7.143,0,0,1,.964,19,6.963,6.963,0,0,1,.1,14.3,7.225,7.225,0,0,1,3.1,9.555,10.117,10.117,0,0,1,2.763,7.99,7.4,7.4,0,0,1,2.75,6.07,6.932,6.932,0,0,1,4.855,1.842,6.852,6.852,0,0,1,9.212.008,6.725,6.725,0,0,1,13.1,1.013a6.935,6.935,0,0,1,2.639,3.06v0A7.158,7.158,0,0,1,16.381,7a8.168,8.168,0,0,1-.408,2.58,7.381,7.381,0,0,1,2.834,3.8,6.814,6.814,0,0,1-.426,5.109,8.33,8.33,0,0,1-3.215,3.321,10.959,10.959,0,0,1-4.788,1.471l-.127.008v4.268h0Zm2.9-11.486a.713.713,0,0,1-.329.6l-2.566,1.662v3.637l.035,0A9.637,9.637,0,0,0,14.5,20.681a7.015,7.015,0,0,0,2.712-2.788,5.5,5.5,0,0,0,.344-4.123,6.213,6.213,0,0,0-2.717-3.38l-.455-.288.19-.5a7.078,7.078,0,0,0,.5-2.595,5.861,5.861,0,0,0-.532-2.39h0A5.63,5.63,0,0,0,12.4,2.127a5.408,5.408,0,0,0-3.129-.81A5.536,5.536,0,0,0,5.754,2.8,5.641,5.641,0,0,0,4.05,6.24a6.064,6.064,0,0,0,.013,1.581,9.138,9.138,0,0,0,.436,1.8l.175.506-.46.272A5.878,5.878,0,0,0,1.39,14.509a5.663,5.663,0,0,0,.7,3.822,5.86,5.86,0,0,0,.678.926,7.539,7.539,0,0,0,2.445,1.77,10.959,10.959,0,0,0,3.357.918l.238.026V14.023L6.2,12.326a.72.72,0,1,1,.784-1.207l1.833,1.193V9.105a.719.719,0,1,1,1.438,0v7.52l1.783-1.157a.72.72,0,0,1,1.112.6Z"
                        transform="translate(10.118 6.169)"
                        fill="#40780a"
                        stroke="rgba(0,0,0,0)"
                        strokeWidth={1}
                      />
                    </g>
                    <g id="inst-tree-7" data-name="inst-tree" style={{ '--t': 'translate(271.922px, 265.937px)' }}>
                      <rect
                        id="Rectangle_39410"
                        data-name="Rectangle 39410"
                        width="40.472"
                        height="40.472"
                        transform="translate(0 0)"
                        fill="#fff"
                        opacity={0}
                      />
                      <g transform="matrix(1, 0, 0, 1, -107.83, -277.28)" filter="url(#Union_466)">
                        <path
                          id="Union_466-2"
                          data-name="Union 466"
                          d="M17.127,40.173,12.271,34.71a17.792,17.792,0,1,1,11.041,0l-4.855,5.463a.89.89,0,0,1-1.33,0Z"
                          transform="translate(110.27 277.28)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                      </g>
                      <path
                        id="Path_190503"
                        data-name="Path 190503"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.223 1.779)"
                        fill="#82c635"
                      />
                      <path
                        id="Path_190504"
                        data-name="Path 190504"
                        d="M2919.288-331.842a7.845,7.845,0,0,1,5.315,3.19,4.941,4.941,0,0,1,0,5.619,8.227,8.227,0,0,1,3.307,4.689,9.51,9.51,0,0,1-.969,5.739l.635.475s-4.824,2.887-6.113,1.321c-.761-.924-5.205-.518-5.854-2.032-.6-1.405-2.437-2.49-2.468-4.257-.041-2.312,1.713-4.04,2.468-5.935a6.566,6.566,0,0,0,.193-3.45c-.186-.3.878-1.675.581-1.935s1.113-1.388.629-1.5,1.31-.822.677-.822S2919.288-331.842,2919.288-331.842Z"
                        transform="translate(-2902.318 339.397)"
                        opacity="0.1"
                      />
                      <path
                        id="Path_190505"
                        data-name="Path 190505"
                        d="M2948.886-335.475a7.846,7.846,0,0,1,5.315,3.19,4.941,4.941,0,0,1,0,5.619,8.227,8.227,0,0,1,3.308,4.689,9.513,9.513,0,0,1-.97,5.739l.635.475a5.946,5.946,0,0,0,1.377-.893c.186-.3,1.451-2.977,1.451-2.977l.707-2.642a29.363,29.363,0,0,0-1.079-2.828c-.223-.3-1.6-1.563-1.6-1.563l-.521-.335a5.329,5.329,0,0,1,0-1.377c.111-.447.261-2.493.261-2.642a15.553,15.553,0,0,0-.819-2.27,21.782,21.782,0,0,0-1.824-1.9,9.9,9.9,0,0,0-2.307-.856,16,16,0,0,0-2.419-.186A3.23,3.23,0,0,0,2948.886-335.475Z"
                        transform="translate(-2931.916 343.03)"
                        opacity="0.17"
                      />
                      <path
                        id="Path_190506"
                        data-name="Path 190506"
                        d="M10.25,27.558h-.043c-.464,0-.933-.02-1.394-.06v-4.21l-.118-.012-.274-.027a12.268,12.268,0,0,1-3.758-1.036A8.855,8.855,0,0,1,1.8,20.129,7.143,7.143,0,0,1,.964,19,6.963,6.963,0,0,1,.1,14.3,7.225,7.225,0,0,1,3.1,9.555,10.117,10.117,0,0,1,2.763,7.99,7.4,7.4,0,0,1,2.75,6.07,6.932,6.932,0,0,1,4.855,1.842,6.852,6.852,0,0,1,9.212.008,6.725,6.725,0,0,1,13.1,1.013a6.935,6.935,0,0,1,2.639,3.06v0A7.158,7.158,0,0,1,16.381,7a8.168,8.168,0,0,1-.408,2.58,7.381,7.381,0,0,1,2.834,3.8,6.814,6.814,0,0,1-.426,5.109,8.33,8.33,0,0,1-3.215,3.321,10.959,10.959,0,0,1-4.788,1.471l-.127.008v4.268h0Zm2.9-11.486a.713.713,0,0,1-.329.6l-2.566,1.662v3.637l.035,0A9.637,9.637,0,0,0,14.5,20.681a7.015,7.015,0,0,0,2.712-2.788,5.5,5.5,0,0,0,.344-4.123,6.213,6.213,0,0,0-2.717-3.38l-.455-.288.19-.5a7.078,7.078,0,0,0,.5-2.595,5.861,5.861,0,0,0-.532-2.39h0A5.63,5.63,0,0,0,12.4,2.127a5.408,5.408,0,0,0-3.129-.81A5.536,5.536,0,0,0,5.754,2.8,5.641,5.641,0,0,0,4.05,6.24a6.064,6.064,0,0,0,.013,1.581,9.138,9.138,0,0,0,.436,1.8l.175.506-.46.272A5.878,5.878,0,0,0,1.39,14.509a5.663,5.663,0,0,0,.7,3.822,5.86,5.86,0,0,0,.678.926,7.539,7.539,0,0,0,2.445,1.77,10.959,10.959,0,0,0,3.357.918l.238.026V14.023L6.2,12.326a.72.72,0,1,1,.784-1.207l1.833,1.193V9.105a.719.719,0,1,1,1.438,0v7.52l1.783-1.157a.72.72,0,0,1,1.112.6Z"
                        transform="translate(10.118 6.169)"
                        fill="#40780a"
                        stroke="rgba(0,0,0,0)"
                        strokeWidth={1}
                      />
                    </g>
                    <g id="inst-tree-8" data-name="inst-tree" style={{ '--t': 'translate(284.57px, 284.173px)' }}>
                      <rect
                        id="Rectangle_39411"
                        data-name="Rectangle 39411"
                        width="40.472"
                        height="40.472"
                        fill="#fff"
                        opacity={0}
                      />
                      <g transform="matrix(1, 0, 0, 1, -120.47, -295.52)" filter="url(#Union_467)">
                        <path
                          id="Union_467-2"
                          data-name="Union 467"
                          d="M17.127,40.173,12.271,34.71a17.792,17.792,0,1,1,11.041,0l-4.855,5.463a.89.89,0,0,1-1.33,0Z"
                          transform="translate(122.92 295.52)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                      </g>
                      <path
                        id="Path_190508"
                        data-name="Path 190508"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.223 1.779)"
                        fill="#82c635"
                      />
                      <path
                        id="Path_190509"
                        data-name="Path 190509"
                        d="M2919.288-331.842a7.845,7.845,0,0,1,5.315,3.19,4.941,4.941,0,0,1,0,5.619,8.227,8.227,0,0,1,3.307,4.689,9.51,9.51,0,0,1-.969,5.739l.635.475s-4.824,2.887-6.113,1.321c-.761-.924-5.205-.518-5.854-2.032-.6-1.405-2.437-2.49-2.468-4.257-.041-2.312,1.713-4.04,2.468-5.935a6.566,6.566,0,0,0,.193-3.45c-.186-.3.878-1.675.581-1.935s1.113-1.388.629-1.5,1.31-.822.677-.822S2919.288-331.842,2919.288-331.842Z"
                        transform="translate(-2902.318 339.397)"
                        opacity="0.1"
                      />
                      <path
                        id="Path_190510"
                        data-name="Path 190510"
                        d="M2948.886-335.475a7.846,7.846,0,0,1,5.315,3.19,4.941,4.941,0,0,1,0,5.619,8.227,8.227,0,0,1,3.308,4.689,9.513,9.513,0,0,1-.97,5.739l.635.475a5.946,5.946,0,0,0,1.377-.893c.186-.3,1.451-2.977,1.451-2.977l.707-2.642a29.363,29.363,0,0,0-1.079-2.828c-.223-.3-1.6-1.563-1.6-1.563l-.521-.335a5.329,5.329,0,0,1,0-1.377c.111-.447.261-2.493.261-2.642a15.553,15.553,0,0,0-.819-2.27,21.782,21.782,0,0,0-1.824-1.9,9.9,9.9,0,0,0-2.307-.856,16,16,0,0,0-2.419-.186A3.23,3.23,0,0,0,2948.886-335.475Z"
                        transform="translate(-2931.916 343.03)"
                        opacity="0.17"
                      />
                      <path
                        id="Path_190511"
                        data-name="Path 190511"
                        d="M10.25,27.558h-.043c-.464,0-.933-.02-1.394-.06v-4.21l-.118-.012-.274-.027a12.268,12.268,0,0,1-3.758-1.036A8.855,8.855,0,0,1,1.8,20.129,7.143,7.143,0,0,1,.964,19,6.963,6.963,0,0,1,.1,14.3,7.225,7.225,0,0,1,3.1,9.555,10.117,10.117,0,0,1,2.763,7.99,7.4,7.4,0,0,1,2.75,6.07,6.932,6.932,0,0,1,4.855,1.842,6.852,6.852,0,0,1,9.212.008,6.725,6.725,0,0,1,13.1,1.013a6.935,6.935,0,0,1,2.639,3.06v0A7.158,7.158,0,0,1,16.381,7a8.168,8.168,0,0,1-.408,2.58,7.381,7.381,0,0,1,2.834,3.8,6.814,6.814,0,0,1-.426,5.109,8.33,8.33,0,0,1-3.215,3.321,10.959,10.959,0,0,1-4.788,1.471l-.127.008v4.268h0Zm2.9-11.486a.713.713,0,0,1-.329.6l-2.566,1.662v3.637l.035,0A9.637,9.637,0,0,0,14.5,20.681a7.015,7.015,0,0,0,2.712-2.788,5.5,5.5,0,0,0,.344-4.123,6.213,6.213,0,0,0-2.717-3.38l-.455-.288.19-.5a7.078,7.078,0,0,0,.5-2.595,5.861,5.861,0,0,0-.532-2.39h0A5.63,5.63,0,0,0,12.4,2.127a5.408,5.408,0,0,0-3.129-.81A5.536,5.536,0,0,0,5.754,2.8,5.641,5.641,0,0,0,4.05,6.24a6.064,6.064,0,0,0,.013,1.581,9.138,9.138,0,0,0,.436,1.8l.175.506-.46.272A5.878,5.878,0,0,0,1.39,14.509a5.663,5.663,0,0,0,.7,3.822,5.86,5.86,0,0,0,.678.926,7.539,7.539,0,0,0,2.445,1.77,10.959,10.959,0,0,0,3.357.918l.238.026V14.023L6.2,12.326a.72.72,0,1,1,.784-1.207l1.833,1.193V9.105a.719.719,0,1,1,1.438,0v7.52l1.783-1.157a.72.72,0,0,1,1.112.6Z"
                        transform="translate(10.118 6.169)"
                        fill="#40780a"
                        stroke="rgba(0,0,0,0)"
                        strokeWidth={1}
                      />
                    </g>
                    <g id="inst-utility-pole-Information" style={{ '--t': 'translate(187.497px, 213.143px)' }}>
                      <rect
                        id="Rectangle_39412"
                        data-name="Rectangle 39412"
                        width="40.472"
                        height="40.472"
                        transform="translate(0 0)"
                        fill="#fff"
                        opacity={0}
                      />
                      <g transform="matrix(1, 0, 0, 1, -23.4, -224.49)" filter="url(#Union_468)">
                        <path
                          id="Union_468-2"
                          data-name="Union 468"
                          d="M17.127,40.173,12.271,34.71a17.792,17.792,0,1,1,11.043,0l-4.857,5.463a.889.889,0,0,1-1.33,0Z"
                          transform="translate(25.89 224.49)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                      </g>
                      <path
                        id="Path_190513"
                        data-name="Path 190513"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.267 1.779)"
                        fill="#b0afc9"
                      />
                      <path
                        id="Path_190514"
                        data-name="Path 190514"
                        d="M12.957,32.177h0a17.327,17.327,0,0,1-1.618-.643l.063-.4.091-.571,2.151-13.6-.017-.014.023-.026.171-1.081h.84l.433-4.467-.019-.017.024-.026.083-.864L15.3,9.2l.241-2.487.122-1.267.242-2.486.122-1.266.044-.455,0-.017L16.118.8c.024-.25.049-.506.077-.8h4.948l.029.3V.312c.019.2.037.384.055.568V.886l.025.265c.017.176.034.352.052.542l.121,1.266.239,2.486.121,1.267L22.028,9.2l.121,1.267.083.87.018.02-.014.013.43,4.471h.871q.405,2.6.814,5.2l.006.041.01.065,0,.005v.007c.474,3.022,1.063,6.783,1.617,10.364a17.326,17.326,0,0,1-1.637.655l-5.688-2.883-5.705,2.891ZM23.94,26.611l-3.876,1.965,4.543,2.3ZM13.4,26.618l-.673,4.258,4.537-2.3Zm5.264-5.2-4.621,4.105,4.621,2.343,4.622-2.343-4.622-4.105Zm3.921-3.482L19.617,20.57l3.924,3.485Zm-7.816.023-.961,6.08,3.9-3.467Zm.946-.854,2.95,2.62,2.95-2.62Zm2.95-2.585-1.495,1.318h2.99Zm2.4-2.119L19.62,13.675l1.712,1.51Zm-4.8,0h0L16,15.182l1.709-1.508L16.266,12.4Zm2.4-3.152-2.03,1.787,2.03,1.792,2.03-1.792Zm1.936-1.7-.977.859L20.779,9.5l-.045-.477Zm-3.863.007h0L16.55,9.43l1.155-1.021-.97-.852Zm1.927-3.18L17.174,6.254l1.489,1.311,1.489-1.311L18.663,4.376Zm1.454-1.835h0l-.646.815L20.3,4.395l-.178-1.854Zm-2.9.014-.178,1.824.812-1.023Zm.595-1.288.847,1.068.848-1.068Z"
                        transform="translate(1.763 0.702)"
                        fill="#fff"
                        stroke="rgba(0,0,0,0)"
                        strokeWidth={1}
                      />
                      <path
                        id="Path_190515"
                        data-name="Path 190515"
                        d="M2477.275,2309.151l.367-1.365,2.03,1.791-.957.845-1.44-1.271Zm3.354,1.271-.957.845,1.5,1.318,1.26-.039-.087-.614Z"
                        transform="translate(-2459.247 -2296.046)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Subtraction_154"
                        data-name="Subtraction 154"
                        d="M.406,6.654h0C.27,6.608.133,6.56,0,6.511L.175,5.352l4.536-2.3,1.4.709L.406,6.654Zm7.107-3.6h0l-1.4-.711L10.734,0l.655,1.088L7.513,3.053Z"
                        transform="translate(14.313 26.224)"
                        fill="#c9d4db"
                        stroke="rgba(0,0,0,0)"
                        strokeMiterlimit={10}
                        strokeWidth={1}
                      />
                      <path
                        id="Path_190518"
                        data-name="Path 190518"
                        d="M2460.038,2378.421l2.942,2.613.953-.847-2.949-2.619h-.811Z"
                        transform="translate(-2443.508 -2359.761)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_190519"
                        data-name="Path 190519"
                        d="M2505.806,2417.45l-.954.847,4.622,4.106.655,1.089-.4-2.556Z"
                        transform="translate(-2484.427 -2396.178)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_190520"
                        data-name="Path 190520"
                        d="M2505.825,2277.525l-.958.845,1.5,1.318.532.469.223-.2-.135-1.413Z"
                        transform="translate(-2484.44 -2268.415)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_190521"
                        data-name="Path 190521"
                        d="M2483.124,2252.7l1.488,1.313-.957.844-.971-.857.083-.849Z"
                        transform="translate(-2464.185 -2245.749)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_190522"
                        data-name="Path 190522"
                        d="M2488.262,2196.627l.634.8.808-1.019-.847-1.07-.488,0Z"
                        transform="translate(-2469.279 -2193.371)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_190523"
                        data-name="Path 190523"
                        d="M2504.852,2220.405l.808-1.02.824,1.039.154,1.6-.3.261-.042-.053h0Z"
                        transform="translate(-2484.427 -2215.329)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Rectangle_17688-2"
                        data-name="Rectangle 17688"
                        d="M3.373,0h7.435A3.373,3.373,0,0,1,14.18,3.373v7.435a3.373,3.373,0,0,1-3.373,3.373H3.373A3.373,3.373,0,0,1,0,10.807V3.373A3.373,3.373,0,0,1,3.373,0Z"
                        transform="translate(20.236 9.966) rotate(45)"
                        fill="#e9c225"
                      />
                      <path
                        id="Rectangle_17688_-_Outline-2"
                        data-name="Rectangle 17688 - Outline"
                        d="M2.925,1.462A1.464,1.464,0,0,0,1.462,2.925v8.33a1.464,1.464,0,0,0,1.462,1.462h8.33a1.464,1.464,0,0,0,1.462-1.462V2.925a1.464,1.464,0,0,0-1.462-1.462H2.925M2.925,0h8.33A2.925,2.925,0,0,1,14.18,2.925v8.33a2.925,2.925,0,0,1-2.925,2.925H2.925A2.925,2.925,0,0,1,0,11.255V2.925A2.925,2.925,0,0,1,2.925,0Z"
                        transform="translate(20.236 9.966) rotate(45)"
                      />
                      <path
                        id="Path_190524"
                        data-name="Path 190524"
                        d="M4.783,5.515a.732.732,0,1,1,.733.73A.734.734,0,0,1,4.783,5.515ZM3.47,4.5.214,1.251A.733.733,0,1,1,1.25.214L4.5,3.468A.732.732,0,0,1,3.47,4.5Z"
                        transform="translate(20.237 16.015) rotate(45)"
                      />
                    </g>
                    <g
                      id="inst-utility-pole-Information-2"
                      data-name="inst-utility-pole-Information"
                      style={{ '--t': 'translate(581.497px, 67.128px)' }}
                    >
                      <rect
                        id="Rectangle_39413"
                        data-name="Rectangle 39413"
                        width="40.472"
                        height="40.472"
                        transform="translate(0 0)"
                        fill="#fff"
                        opacity={0}
                      />
                      <g transform="matrix(1, 0, 0, 1, -417.4, -78.47)" filter="url(#Union_469)">
                        <path
                          id="Union_469-2"
                          data-name="Union 469"
                          d="M17.127,40.173,12.271,34.71a17.792,17.792,0,1,1,11.043,0l-4.857,5.463a.889.889,0,0,1-1.33,0Z"
                          transform="translate(419.89 78.47)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                      </g>
                      <path
                        id="Path_190526"
                        data-name="Path 190526"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.267 1.779)"
                        fill="#b0afc9"
                      />
                      <path
                        id="Path_190527"
                        data-name="Path 190527"
                        d="M12.957,32.177h0a17.327,17.327,0,0,1-1.618-.643l.063-.4.091-.571,2.151-13.6-.017-.014.023-.026.171-1.081h.84l.433-4.467-.019-.017.024-.026.083-.864L15.3,9.2l.241-2.487.122-1.267.242-2.486.122-1.266.044-.455,0-.017L16.118.8c.024-.25.049-.506.077-.8h4.948l.029.3V.312c.019.2.037.384.055.568V.886l.025.265c.017.176.034.352.052.542l.121,1.266.239,2.486.121,1.267L22.028,9.2l.121,1.267.083.87.018.02-.014.013.43,4.471h.871q.405,2.6.814,5.2l.006.041.01.065,0,.005v.007c.474,3.022,1.063,6.783,1.617,10.364a17.326,17.326,0,0,1-1.637.655l-5.688-2.883-5.705,2.891ZM23.94,26.611l-3.876,1.965,4.543,2.3ZM13.4,26.618l-.673,4.258,4.537-2.3Zm5.264-5.2-4.621,4.105,4.621,2.343,4.622-2.343-4.622-4.105Zm3.921-3.482L19.617,20.57l3.924,3.485Zm-7.816.023-.961,6.08,3.9-3.467Zm.946-.854,2.95,2.62,2.95-2.62Zm2.95-2.585-1.495,1.318h2.99Zm2.4-2.119L19.62,13.675l1.712,1.51Zm-4.8,0h0L16,15.182l1.709-1.508L16.266,12.4Zm2.4-3.152-2.03,1.787,2.03,1.792,2.03-1.792Zm1.936-1.7-.977.859L20.779,9.5l-.045-.477Zm-3.863.007h0L16.55,9.43l1.155-1.021-.97-.852Zm1.927-3.18L17.174,6.254l1.489,1.311,1.489-1.311L18.663,4.376Zm1.454-1.835h0l-.646.815L20.3,4.395l-.178-1.854Zm-2.9.014-.178,1.824.812-1.023Zm.595-1.288.847,1.068.848-1.068Z"
                        transform="translate(1.763 0.702)"
                        fill="#fff"
                        stroke="rgba(0,0,0,0)"
                        strokeWidth={1}
                      />
                      <path
                        id="Path_190528"
                        data-name="Path 190528"
                        d="M2477.275,2309.151l.367-1.365,2.03,1.791-.957.845-1.44-1.271Zm3.354,1.271-.957.845,1.5,1.318,1.26-.039-.087-.614Z"
                        transform="translate(-2459.247 -2296.046)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Subtraction_155"
                        data-name="Subtraction 155"
                        d="M.406,6.654h0C.27,6.608.133,6.56,0,6.511L.175,5.352l4.536-2.3,1.4.709L.406,6.654Zm7.107-3.6h0l-1.4-.711L10.734,0l.655,1.088L7.513,3.053Z"
                        transform="translate(14.313 26.224)"
                        fill="#c9d4db"
                        stroke="rgba(0,0,0,0)"
                        strokeMiterlimit={10}
                        strokeWidth={1}
                      />
                      <path
                        id="Path_190531"
                        data-name="Path 190531"
                        d="M2460.038,2378.421l2.942,2.613.953-.847-2.949-2.619h-.811Z"
                        transform="translate(-2443.508 -2359.761)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_190532"
                        data-name="Path 190532"
                        d="M2505.806,2417.45l-.954.847,4.622,4.106.655,1.089-.4-2.556Z"
                        transform="translate(-2484.427 -2396.178)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_190533"
                        data-name="Path 190533"
                        d="M2505.825,2277.525l-.958.845,1.5,1.318.532.469.223-.2-.135-1.413Z"
                        transform="translate(-2484.44 -2268.415)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_190534"
                        data-name="Path 190534"
                        d="M2483.124,2252.7l1.488,1.313-.957.844-.971-.857.083-.849Z"
                        transform="translate(-2464.185 -2245.749)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_190535"
                        data-name="Path 190535"
                        d="M2488.262,2196.627l.634.8.808-1.019-.847-1.07-.488,0Z"
                        transform="translate(-2469.279 -2193.371)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_190536"
                        data-name="Path 190536"
                        d="M2504.852,2220.405l.808-1.02.824,1.039.154,1.6-.3.261-.042-.053h0Z"
                        transform="translate(-2484.427 -2215.329)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Rectangle_17688-3"
                        data-name="Rectangle 17688"
                        d="M3.373,0h7.435A3.373,3.373,0,0,1,14.18,3.373v7.435a3.373,3.373,0,0,1-3.373,3.373H3.373A3.373,3.373,0,0,1,0,10.807V3.373A3.373,3.373,0,0,1,3.373,0Z"
                        transform="translate(20.236 9.966) rotate(45)"
                        fill="#e9c225"
                      />
                      <path
                        id="Rectangle_17688_-_Outline-3"
                        data-name="Rectangle 17688 - Outline"
                        d="M2.925,1.462A1.464,1.464,0,0,0,1.462,2.925v8.33a1.464,1.464,0,0,0,1.462,1.462h8.33a1.464,1.464,0,0,0,1.462-1.462V2.925a1.464,1.464,0,0,0-1.462-1.462H2.925M2.925,0h8.33A2.925,2.925,0,0,1,14.18,2.925v8.33a2.925,2.925,0,0,1-2.925,2.925H2.925A2.925,2.925,0,0,1,0,11.255V2.925A2.925,2.925,0,0,1,2.925,0Z"
                        transform="translate(20.236 9.966) rotate(45)"
                      />
                      <path
                        id="Path_190537"
                        data-name="Path 190537"
                        d="M4.783,5.515a.732.732,0,1,1,.733.73A.734.734,0,0,1,4.783,5.515ZM3.47,4.5.214,1.251A.733.733,0,1,1,1.25.214L4.5,3.468A.732.732,0,0,1,3.47,4.5Z"
                        transform="translate(20.237 16.015) rotate(45)"
                      />
                    </g>
                    <g id="inst-utility-pole-common-iron" style={{ '--t': 'translate(246.206px, 157.673px)' }}>
                      <g id="inst-utility-pole-common-iron-2" data-name="inst-utility-pole-common-iron">
                        <rect
                          id="Rectangle_39414"
                          data-name="Rectangle 39414"
                          width="40.472"
                          height="40.472"
                          fill="#fff"
                          opacity={0}
                        />
                        <g id="Group_107573" data-name="Group 107573" transform="translate(2.444 0)">
                          <g id="Group_107572" data-name="Group 107572" transform="translate(0 0)">
                            <g transform="matrix(1, 0, 0, 1, -84.55, -169.02)" filter="url(#Union_470)">
                              <path
                                id="Union_470-2"
                                data-name="Union 470"
                                d="M17.127,40.174l-4.856-5.464a17.793,17.793,0,1,1,11.041,0l-4.855,5.464a.891.891,0,0,1-1.33,0Z"
                                transform="translate(84.55 169.02)"
                                fill="#fff"
                                stroke="rgba(0,0,0,0)"
                                strokeMiterlimit={10}
                                strokeWidth={1}
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                      <path
                        id="Path_190539"
                        data-name="Path 190539"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.223 1.779)"
                        fill="#9830ff"
                      />
                      <rect
                        id="Rectangle_39415"
                        data-name="Rectangle 39415"
                        width="1.278"
                        height="2.263"
                        rx="0.639"
                        transform="translate(16.143 6.187)"
                        fill="#ffb833"
                      />
                      <rect
                        id="Rectangle_39416"
                        data-name="Rectangle 39416"
                        width="1.278"
                        height="2.103"
                        rx="0.639"
                        transform="translate(21.742 6.187)"
                        fill="#ffb833"
                      />
                      <path
                        id="Rectangle_39417"
                        data-name="Rectangle 39417"
                        d="M.639,0h0a.639.639,0,0,1,.639.639v1.7a.639.639,0,0,1-.639.639h0A.639.639,0,0,1,0,2.336V.639A.639.639,0,0,1,.639,0Z"
                        transform="translate(10.456 6.187)"
                        fill="#ffb833"
                      />
                      <path
                        id="Path_190540"
                        data-name="Path 190540"
                        d="M12.914,26.15h0l-3.4-4.066-.3,3.381-.059.667c-.432-.053-.862-.124-1.279-.211l.041-.456L9.774,4.646,3.9,1.769H1.362V.005H5.715V0h9.03l.229,2.578.047.533.137,1.535.027.294,1.805,20.2c-.414.162-.837.307-1.258.433l-.048-.546L15.512,23.1l-.144-1.629H10.81L14.458,25.9c-.512.108-1.031.191-1.543.249ZM10.126,15.175,9.68,20.182h4.427l-3.982-5.008h0Zm1.3-.613,3.756,4.826-.428-4.826H11.426Zm-.706-6.079-.426,4.786h3.388L10.721,8.482h0Zm.713-.715h0l3.12,4.545-.4-4.545H11.434Zm-.173-5.248L10.9,6.6h2.355Zm.6-1.227,2.072,4.141-.367-4.141H11.858Zm-6.472,0h0L9.911,3.111l.161-1.818Z"
                        transform="translate(9.133 7.561)"
                        fill="#fff"
                        stroke="rgba(0,0,0,0)"
                        strokeWidth={1}
                      />
                      <path
                        id="Path_190541"
                        data-name="Path 190541"
                        d="M3536.614,2362.741l.06-.608,1.241-.005,3.756,4.826.071.795H3540.6Z"
                        transform="translate(-3517.355 -2340.005)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_190542"
                        data-name="Path 190542"
                        d="M3543.412,2285.194l.083-.714h.631l3.119,4.545.091.957h-.961Z"
                        transform="translate(-3523.558 -2269.151)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_190543"
                        data-name="Path 190543"
                        d="M3549.593,2211.7l.071-1.225.527,0,2.073,4.14.11,1.166h-.788Z"
                        transform="translate(-3529.198 -2201.623)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_190544"
                        data-name="Path 190544"
                        d="M14.429,6.319h0L14.3,6.17,11.028,2.254l.063-.617,1.235.007,3.51,4.26.137.166c-.512.108-1.032.191-1.544.249Z"
                        transform="translate(7.617 27.392)"
                        fill="#c9d4db"
                        stroke="rgba(0,0,0,0)"
                        strokeWidth={1}
                      />
                    </g>
                    <g
                      id="inst-utility-pole-common-iron-3"
                      data-name="inst-utility-pole-common-iron"
                      style={{ '--t': 'translate(156.206px, 258.673px)' }}
                    >
                      <g id="inst-utility-pole-common-iron-4" data-name="inst-utility-pole-common-iron">
                        <rect
                          id="Rectangle_39418"
                          data-name="Rectangle 39418"
                          width="40.472"
                          height="40.472"
                          fill="#fff"
                          opacity={0}
                        />
                        <g id="Group_107575" data-name="Group 107575" transform="translate(2.444 0)">
                          <g id="Group_107574" data-name="Group 107574" transform="translate(0 0)">
                            <g transform="matrix(1, 0, 0, 1, 5.45, -270.02)" filter="url(#Union_471)">
                              <path
                                id="Union_471-2"
                                data-name="Union 471"
                                d="M17.127,40.174l-4.856-5.464a17.793,17.793,0,1,1,11.041,0l-4.855,5.464a.891.891,0,0,1-1.33,0Z"
                                transform="translate(-5.45 270.02)"
                                fill="#fff"
                                stroke="rgba(0,0,0,0)"
                                strokeMiterlimit={10}
                                strokeWidth={1}
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                      <path
                        id="Path_190546"
                        data-name="Path 190546"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.223 1.779)"
                        fill="#9830ff"
                      />
                      <rect
                        id="Rectangle_39419"
                        data-name="Rectangle 39419"
                        width="1.278"
                        height="2.263"
                        rx="0.639"
                        transform="translate(16.143 6.187)"
                        fill="#ffb833"
                      />
                      <rect
                        id="Rectangle_39420"
                        data-name="Rectangle 39420"
                        width="1.278"
                        height="2.103"
                        rx="0.639"
                        transform="translate(21.742 6.187)"
                        fill="#ffb833"
                      />
                      <path
                        id="Rectangle_39421"
                        data-name="Rectangle 39421"
                        d="M.639,0h0a.639.639,0,0,1,.639.639v1.7a.639.639,0,0,1-.639.639h0A.639.639,0,0,1,0,2.336V.639A.639.639,0,0,1,.639,0Z"
                        transform="translate(10.456 6.187)"
                        fill="#ffb833"
                      />
                      <path
                        id="Path_190547"
                        data-name="Path 190547"
                        d="M12.914,26.15h0l-3.4-4.066-.3,3.381-.059.667c-.432-.053-.862-.124-1.279-.211l.041-.456L9.774,4.646,3.9,1.769H1.362V.005H5.715V0h9.03l.229,2.578.047.533.137,1.535.027.294,1.805,20.2c-.414.162-.837.307-1.258.433l-.048-.546L15.512,23.1l-.144-1.629H10.81L14.458,25.9c-.512.108-1.031.191-1.543.249ZM10.126,15.175,9.68,20.182h4.427l-3.982-5.008h0Zm1.3-.613,3.756,4.826-.428-4.826H11.426Zm-.706-6.079-.426,4.786h3.388L10.721,8.482h0Zm.713-.715h0l3.12,4.545-.4-4.545H11.434Zm-.173-5.248L10.9,6.6h2.355Zm.6-1.227,2.072,4.141-.367-4.141H11.858Zm-6.472,0h0L9.911,3.111l.161-1.818Z"
                        transform="translate(9.133 7.561)"
                        fill="#fff"
                        stroke="rgba(0,0,0,0)"
                        strokeWidth={1}
                      />
                      <path
                        id="Path_190548"
                        data-name="Path 190548"
                        d="M3536.614,2362.741l.06-.608,1.241-.005,3.756,4.826.071.795H3540.6Z"
                        transform="translate(-3517.355 -2340.005)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_190549"
                        data-name="Path 190549"
                        d="M3543.412,2285.194l.083-.714h.631l3.119,4.545.091.957h-.961Z"
                        transform="translate(-3523.558 -2269.151)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_190550"
                        data-name="Path 190550"
                        d="M3549.593,2211.7l.071-1.225.527,0,2.073,4.14.11,1.166h-.788Z"
                        transform="translate(-3529.198 -2201.623)"
                        fill="#c9d4db"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_190551"
                        data-name="Path 190551"
                        d="M14.429,6.319h0L14.3,6.17,11.028,2.254l.063-.617,1.235.007,3.51,4.26.137.166c-.512.108-1.032.191-1.544.249Z"
                        transform="translate(7.617 27.392)"
                        fill="#c9d4db"
                        stroke="rgba(0,0,0,0)"
                        strokeWidth={1}
                      />
                    </g>
                    <g id="inst-utility-pole-high-voltage-iron" style={{ '--t': 'translate(304.806px, 76.221px)' }}>
                      <rect
                        id="Rectangle_39422"
                        data-name="Rectangle 39422"
                        width="40.472"
                        height="40.472"
                        transform="translate(0 0)"
                        fill="#fff"
                        opacity={0}
                      />
                      <g transform="matrix(1, 0, 0, 1, -140.71, -87.56)" filter="url(#Union_472)">
                        <path
                          id="Union_472-2"
                          data-name="Union 472"
                          d="M17.127,40.173,12.271,34.71a17.792,17.792,0,1,1,11.041,0l-4.855,5.463a.89.89,0,0,1-1.33,0Z"
                          transform="translate(143.2 87.56)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeMiterlimit={10}
                          strokeWidth={1}
                        />
                      </g>
                      <path
                        id="Path_190553"
                        data-name="Path 190553"
                        d="M16.013,0A16.013,16.013,0,1,1,0,16.013,16.013,16.013,0,0,1,16.013,0Z"
                        transform="translate(4.267 1.779)"
                        fill="#ff3030"
                      />
                      <g id="Group_107576" data-name="Group 107576" transform="translate(11.804 6.745)">
                        <rect
                          id="Rectangle_39423"
                          data-name="Rectangle 39423"
                          width="1.27"
                          height="2.496"
                          rx="0.635"
                          transform="translate(0.002 1.758)"
                          fill="#ffb833"
                        />
                        <rect
                          id="Rectangle_39424"
                          data-name="Rectangle 39424"
                          width="1.27"
                          height="2.496"
                          rx="0.635"
                          transform="translate(14.691 1.758)"
                          fill="#ffb833"
                        />
                        <rect
                          id="Rectangle_39425"
                          data-name="Rectangle 39425"
                          width="1.27"
                          height="2.496"
                          rx="0.635"
                          transform="translate(0.002 5.495)"
                          fill="#ffb833"
                        />
                        <rect
                          id="Rectangle_39426"
                          data-name="Rectangle 39426"
                          width="1.27"
                          height="2.496"
                          rx="0.635"
                          transform="translate(14.691 5.495)"
                          fill="#ffb833"
                        />
                        <rect
                          id="Rectangle_39427"
                          data-name="Rectangle 39427"
                          width="1.27"
                          height="2.496"
                          rx="0.635"
                          transform="translate(0.002 9.319)"
                          fill="#ffb833"
                        />
                        <rect
                          id="Rectangle_39428"
                          data-name="Rectangle 39428"
                          width="1.27"
                          height="2.496"
                          rx="0.635"
                          transform="translate(14.691 9.319)"
                          fill="#ffb833"
                        />
                        <path
                          id="Path_190554"
                          data-name="Path 190554"
                          d="M2418.566,2193.182l1.441,1.271-1.709,1.508.269-2.779Zm.47-4.847.969.852-.9.789h-.233l.16-1.641Zm.485-5,.634.8-.811,1.023.177-1.824Zm2.29-1.288-.848,1.069-.847-1.069Zm.784,3.127-.823-1.039.646-.815.178,1.854Zm.462,4.8h-.239l-.9-.789.978-.859.158,1.648Zm-.6,6.64-1.495-1.318-1.495,1.318Zm-2.984-9.583,1.489,1.311,1.489-1.311-1.489-1.879-1.489,1.879Zm3.519,4.785-2.03-1.787-2.03,1.787,2.03,1.791,2.03-1.791Zm.639,4.146-1.712-1.51,1.444-1.274.268,2.784Zm-9.388-4.721h3.238l-.083.864-.023.026.019.016-.433,4.468h-.84l-.171,1.081-.023.026.017.014,10.085.1s-.114-.728-.191-1.224h-.871l-.429-4.472.014-.012-.018-.02-.083-.87h3.233l1.266.433v-1.7h-4.62l-.239-2.487h3.593l1.266.434v-1.7h-4.981l-.239-2.486h3.954l1.266.433v-1.7h-5.341c-.058-.6-.1-1.065-.163-1.692H2418.5c-.062.639-.1,1.089-.164,1.692h-5.354v1.7l1.266-.433h3.966l-.242,2.486h-4.99v1.7l1.266-.434h3.6l-.241,2.487h-4.627v1.7Z"
                          transform="translate(-2412.979 -2180.779)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190555"
                          data-name="Path 190555"
                          d="M2477.275,2309.151l.367-1.365,2.03,1.791-.957.845-1.44-1.271Zm3.354,1.271-.957.845,1.5,1.318,1.26-.039-.087-.614Z"
                          transform="translate(-2471.687 -2296.748)"
                          fill="#c9d4db"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190556"
                          data-name="Path 190556"
                          d="M2505.825,2277.525l-.958.845,1.5,1.318.532.469.223-.2-.135-1.413Z"
                          transform="translate(-2496.88 -2269.117)"
                          fill="#c9d4db"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190557"
                          data-name="Path 190557"
                          d="M2483.124,2252.7l1.488,1.313-.957.844-.971-.857.083-.849Z"
                          transform="translate(-2476.625 -2246.45)"
                          fill="#c9d4db"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190558"
                          data-name="Path 190558"
                          d="M2488.262,2196.627l.634.8.808-1.019-.847-1.07-.488,0Z"
                          transform="translate(-2481.719 -2194.072)"
                          fill="#c9d4db"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190559"
                          data-name="Path 190559"
                          d="M2504.852,2220.405l.808-1.02.824,1.039.154,1.6-.3.261-.042-.053h0Z"
                          transform="translate(-2496.866 -2216.03)"
                          fill="#c9d4db"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190560"
                          data-name="Path 190560"
                          d="M17.951,11.2v0l2.985-1.513L16.313,5.58,11.692,9.685l2.682,1.36A17.284,17.284,0,0,1,9.926,9.77l1.362-8.613L11.471,0h9.717l.228,1.462c.319,2.038.865,5.524,1.374,8.784A17.772,17.772,0,0,1,17.951,11.2Zm2.284-9.1L17.267,4.733l3.924,3.485Zm-7.816.023L11.458,8.2l3.9-3.467Zm.946-.854,2.95,2.62,2.95-2.62Z"
                          transform="translate(-8.328 15.837)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                        />
                        <path
                          id="Path_190561"
                          data-name="Path 190561"
                          d="M2460.038,2378.421l2.942,2.613.953-.847-2.949-2.619h-.811Z"
                          transform="translate(-2455.948 -2360.463)"
                          fill="#c9d4db"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_190562"
                          data-name="Path 190562"
                          d="M2505.806,2417.45l-.954.847,4.622,4.106.514.444-.259-1.911Z"
                          transform="translate(-2496.866 -2396.88)"
                          fill="#c9d4db"
                          fillRule="evenodd"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g id="point" transform="translate(-2115 -12443)">
                <rect
                  id="Rectangle_39340"
                  data-name="Rectangle 39340"
                  width={550}
                  height={410}
                  transform="translate(2115 12443)"
                  fill="#fff"
                  opacity={0}
                />
                <g id="pulse" data-name="Group 107640" transform="translate(620 1010)" className="animatePulse">
                  <circle
                    id="Ellipse_2597"
                    data-name="Ellipse 2597"
                    cx={51}
                    cy={51}
                    style={{ '--r': 51 }}
                    transform="translate(1544 11731)"
                    fill="#0074e9"
                    opacity="0.2"
                  />
                  <circle
                    id="Ellipse_2598"
                    data-name="Ellipse 2598"
                    cx={36}
                    cy={36}
                    style={{ '--r': 36 }}
                    transform="translate(1559 11746)"
                    fill="#0074e9"
                    opacity="0.2"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewThe;
