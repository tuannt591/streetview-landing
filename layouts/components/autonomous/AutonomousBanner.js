import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import { paths } from 'constants/paths';

const LIST_LOGO = [
  '/images/google_map_logo.svg',
  '/images/map_esri.svg',
  '/images/map_here.svg',
  '/images/map_mapbox.svg',
  '/images/map_tomtom.svg',
];

const AutonomousBanner = () => {
  const router = useRouter();

  return (
    <section className="section overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:order-2 lg:order-1 lg:w-[50%]">
            <Typography variant="h2" className="mb-3 text-5xl max-md:text-4xl">
              Autonomous
              <br />
              Solutions
            </Typography>
            <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
              Make sense of the environment for autonomous vehicles.
              <br />
              Train visual perception models with rich datasets of street scenes and traffic signs from around the
              world. Scale up map updates to keep up with the needs of HD maps.
            </Typography>
            <div className="mt-5 grid grid-cols-2 items-center justify-center gap-4 gap-4 md:w-[350px]">
              <Button
                variant="filled"
                size="lg"
                color="blue"
                className="rounded-full p-[15px] font-normal normal-case"
                onClick={() => router.push(paths.contact)}
              >
                Contact us
              </Button>
              <Button variant="outlined" size="lg" className="rounded-full p-[15px] font-normal normal-case">
                Catalog
              </Button>
            </div>
          </div>

          <div className="order-1 relative w-full lg:order-2 max-md:hidden lg:h-auto lg:w-[50%]">
            <div className="autonomous-header-bg">
              <img src="/images/autonomous-header-bg.svg" alt="autonomous-header-bg" />
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              viewBox="0 0 745 480"
              style={{ position: 'absolute', left: '0px', top: '0px' }}
            >
              <defs>
                <linearGradient
                  id="linear-gradient-road"
                  x1="0.98"
                  y1="0.069"
                  x2="0.067"
                  y2="1.378"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0%" stopColor="rgb(45,55,72)" stopOpacity={1} />
                  <stop offset="20%" stopColor="rgb(0,116,233)" stopOpacity={1} />
                  <stop offset="100%" stopColor="rgb(45,55,72)" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="linear-gradient" y1="0.5" x2={1} y2="0.5" gradientUnits="objectBoundingBox">
                  <stop offset={0} stopColor="#25054d" />
                  <stop offset={1} stopColor="#1b2b69" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-3"
                  x1="389.932"
                  y1="0.873"
                  x2="389.184"
                  y2="0.046"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset={0} stopColor="#010002" />
                  <stop offset="0.025" stopColor="#030005" />
                  <stop offset="0.192" stopColor="#0f0318" />
                  <stop offset="0.362" stopColor="#160524" />
                  <stop offset="0.54" stopColor="#190628" />
                  <stop offset="0.703" stopColor="#0b0212" />
                  <stop offset="0.86" stopColor="#020004" />
                  <stop offset={1} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-4"
                  x1="323.247"
                  y1="0.5"
                  x2="323.956"
                  y2="0.5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset={0} stopColor="#100221" />
                  <stop offset={1} stopColor="#10054d" />
                </linearGradient>
                <radialGradient
                  id="radial-gradient"
                  cx="0.5"
                  cy="0.5"
                  r="0.424"
                  gradientTransform="matrix(-1.514, 0, 0, 1, 1369.264, 0)"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={1} />
                </radialGradient>
                <linearGradient
                  id="linear-gradient-5"
                  x1="591.518"
                  y1="0.5"
                  x2="592.518"
                  y2="0.5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset={0} stopColor="#bcbec0" />
                  <stop offset={1} stopColor="#e6e7e8" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-6"
                  x1="591.455"
                  y1="0.5"
                  x2="592.455"
                  y2="0.5"
                  xlinkHref="#linear-gradient-5"
                />
                <linearGradient
                  id="linear-gradient-7"
                  x1="397.11"
                  y1="0.873"
                  x2="396.361"
                  y2="0.046"
                  xlinkHref="#linear-gradient-3"
                />
                <linearGradient
                  id="linear-gradient-8"
                  x1="329.206"
                  y1="0.5"
                  x2="329.916"
                  y2="0.5"
                  xlinkHref="#linear-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-2"
                  cx="0.5"
                  cy="0.5"
                  r="0.424"
                  gradientTransform="matrix(-1.514, 0, 0, 1, 1394.473, 0)"
                  xlinkHref="#radial-gradient"
                />
                <linearGradient
                  id="linear-gradient-9"
                  x1="602.427"
                  y1="0.5"
                  x2="603.427"
                  y2="0.5"
                  xlinkHref="#linear-gradient-5"
                />
                <linearGradient
                  id="linear-gradient-10"
                  x1="602.364"
                  y1="0.5"
                  x2="603.364"
                  y2="0.5"
                  xlinkHref="#linear-gradient-5"
                />
                <radialGradient
                  id="radial-gradient-3"
                  cx="0.488"
                  cy="0.26"
                  r="1.068"
                  gradientTransform="translate(0.198) scale(0.603 1)"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset={0} stopColor="#2af6ff" />
                  <stop offset="0.652" stopColor="#1376bd" />
                  <stop offset="0.758" stopColor="#1b66af" />
                  <stop offset="0.965" stopColor="#323e8a" />
                  <stop offset="0.995" stopColor="#363885" />
                </radialGradient>
                <linearGradient
                  id="linear-gradient-11"
                  x1="0.368"
                  y1="1.021"
                  x2="0.774"
                  y2="-0.894"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset={0} stopColor="#138bbd" />
                  <stop offset="0.634" stopColor="#30c4d3" />
                  <stop offset={1} stopColor="#43e8e1" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-12"
                  x1="0.168"
                  y1="0.5"
                  x2="1.06"
                  y2="0.5"
                  xlinkHref="#linear-gradient-11"
                />
                <linearGradient
                  id="linear-gradient-13"
                  x1={0}
                  y1="0.5"
                  x2={1}
                  y2="0.5"
                  xlinkHref="#linear-gradient-3"
                />
                <linearGradient id="linear-gradient-14" y1="0.5" x2={1} y2="0.5" gradientUnits="objectBoundingBox">
                  <stop offset={0} stopColor="#25054d" />
                  <stop offset="0.692" stopColor="#1b2b69" />
                  <stop offset={1} stopColor="#3746a3" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-16"
                  x1="1.341"
                  y1="1.334"
                  x2="0.031"
                  y2="-0.124"
                  xlinkHref="#linear-gradient-14"
                />
                <linearGradient id="linear-gradient-17" y1="0.5" x2={1} y2="0.5" gradientUnits="objectBoundingBox">
                  <stop offset="0.035" stopColor="#138bbd" />
                  <stop offset="0.226" stopColor="#169ac6" />
                  <stop offset="0.595" stopColor="#1ec2df" />
                  <stop offset={1} stopColor="#2af6ff" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-18"
                  x1={0}
                  y1="0.5"
                  x2={1}
                  y2="0.5"
                  xlinkHref="#linear-gradient-11"
                />
                <radialGradient
                  id="radial-gradient-4"
                  cx="0.666"
                  cy="0.643"
                  r="0.57"
                  gradientTransform="translate(0.316) scale(0.367 1)"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset={0} stopColor="#ff63ce" />
                  <stop offset={1} stopColor="#9f19ab" />
                </radialGradient>
                <radialGradient
                  id="radial-gradient-5"
                  cx="0.666"
                  cy="0.643"
                  r="0.644"
                  gradientTransform="translate(0.314) scale(0.371 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-6"
                  cx="0.666"
                  cy="0.643"
                  r="0.719"
                  gradientTransform="translate(0.313) scale(0.374 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-7"
                  cx="0.666"
                  cy="0.643"
                  r="0.802"
                  gradientTransform="translate(0.314) scale(0.372 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-8"
                  cx="0.666"
                  cy="0.643"
                  r="0.895"
                  gradientTransform="translate(0.317) scale(0.366 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-9"
                  cx="0.666"
                  cy="0.643"
                  r="0.992"
                  gradientTransform="translate(0.321) scale(0.359 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-10"
                  cx="0.666"
                  cy="0.643"
                  r="1.093"
                  gradientTransform="translate(0.324) scale(0.352 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-11"
                  cx="0.666"
                  cy="0.643"
                  r="1.202"
                  gradientTransform="translate(0.328) scale(0.343 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-12"
                  cx="0.666"
                  cy="0.643"
                  r="1.319"
                  gradientTransform="translate(0.333) scale(0.334 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-13"
                  cx="0.666"
                  cy="0.643"
                  r="1.441"
                  gradientTransform="translate(0.338) scale(0.325 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-14"
                  cx="0.666"
                  cy="0.643"
                  r="1.564"
                  gradientTransform="translate(0.341) scale(0.317 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-15"
                  cx="0.666"
                  cy="0.643"
                  r="1.693"
                  gradientTransform="translate(0.345) scale(0.309 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-16"
                  cx="-0.123"
                  cy="0.288"
                  r="0.545"
                  gradientTransform="translate(-0.132) scale(1.264 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-17"
                  cx="-0.112"
                  cy="0.284"
                  r="0.565"
                  gradientTransform="translate(-0.123) scale(1.246 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-18"
                  cx="-0.102"
                  cy="0.279"
                  r="0.586"
                  gradientTransform="translate(-0.113) scale(1.227 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-19"
                  cx="-0.091"
                  cy="0.275"
                  r="0.607"
                  gradientTransform="translate(-0.103) scale(1.206 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-20"
                  cx="-0.081"
                  cy="0.271"
                  r="0.629"
                  gradientTransform="translate(-0.092) scale(1.184 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-21"
                  cx="-0.07"
                  cy="0.267"
                  r="0.653"
                  gradientTransform="translate(-0.08) scale(1.16 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-22"
                  cx="-0.06"
                  cy="0.263"
                  r="0.677"
                  gradientTransform="translate(-0.067) scale(1.135 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-23"
                  cx="-0.05"
                  cy="0.258"
                  r="0.703"
                  gradientTransform="translate(-0.054) scale(1.107 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-24"
                  cx="-0.039"
                  cy="0.254"
                  r="0.73"
                  gradientTransform="translate(-0.039) scale(1.077 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-25"
                  cx="-0.029"
                  cy="0.25"
                  r="0.76"
                  gradientTransform="translate(-0.022) scale(1.045 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-26"
                  cx="-0.018"
                  cy="0.246"
                  r="0.792"
                  gradientTransform="translate(-0.005) scale(1.01 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <radialGradient
                  id="radial-gradient-27"
                  cx="-0.008"
                  cy="0.241"
                  r="0.828"
                  gradientTransform="translate(0.014) scale(0.971 1)"
                  xlinkHref="#radial-gradient-4"
                />
                <linearGradient
                  id="linear-gradient-20"
                  x1="0.518"
                  y1="-0.396"
                  x2="0.477"
                  y2="1.074"
                  xlinkHref="#linear-gradient-11"
                />
                <linearGradient
                  id="linear-gradient-21"
                  x1="0.231"
                  y1="1.231"
                  x2="0.589"
                  y2="0.258"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={1} stopColor="#8b949e" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-25"
                  x1={0}
                  y1="0.5"
                  x2={1}
                  y2="0.5"
                  xlinkHref="#linear-gradient-4"
                />
                <linearGradient
                  id="linear-gradient-29"
                  x1="0.243"
                  y1="-0.426"
                  x2="0.503"
                  y2="0.51"
                  xlinkHref="#linear-gradient-11"
                />
                <linearGradient
                  id="linear-gradient-30"
                  x1="0.608"
                  y1="1.572"
                  x2="0.46"
                  y2="-0.246"
                  xlinkHref="#linear-gradient-14"
                />
                <linearGradient
                  id="linear-gradient-31"
                  x1="0.596"
                  y1="1.395"
                  x2="0.374"
                  y2="-0.258"
                  xlinkHref="#linear-gradient-14"
                />
                <linearGradient
                  id="linear-gradient-33"
                  x1="1.436"
                  y1="0.775"
                  x2="0.412"
                  y2="0.473"
                  xlinkHref="#linear-gradient-21"
                />
                <linearGradient
                  id="linear-gradient-34"
                  x1="-0.203"
                  y1="0.364"
                  x2="3.546"
                  y2="1.119"
                  xlinkHref="#linear-gradient-21"
                />
                <linearGradient
                  id="linear-gradient-35"
                  x1="-0.172"
                  y1="0.346"
                  x2="3.484"
                  y2="0.943"
                  xlinkHref="#linear-gradient-21"
                />
                <linearGradient
                  id="linear-gradient-36"
                  x1="0.302"
                  y1="1.004"
                  x2="1.378"
                  y2="-0.824"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset={0} />
                  <stop offset="0.697" stopColor="#1b2b69" />
                  <stop offset={1} stopColor="#3746a3" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-37"
                  x1="0.137"
                  y1="1.093"
                  x2="1.191"
                  y2="-0.713"
                  xlinkHref="#linear-gradient-36"
                />
                <linearGradient
                  id="linear-gradient-38"
                  x1="0.526"
                  y1="0.615"
                  x2="0.055"
                  y2="0.119"
                  xlinkHref="#linear-gradient-36"
                />
                <linearGradient
                  id="linear-gradient-39"
                  x1="0.518"
                  y1="0.696"
                  x2="0.217"
                  y2="0.02"
                  xlinkHref="#linear-gradient-36"
                />
                <linearGradient
                  id="linear-gradient-40"
                  x1="-0.424"
                  y1="-0.179"
                  x2="1.042"
                  y2="0.848"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset={0} stopColor="#696969" />
                  <stop offset="0.242" stopColor="#9c9c9c" />
                  <stop offset="0.48" stopColor="#c6c6c6" />
                  <stop offset="0.692" stopColor="#e5e5e5" />
                  <stop offset="0.873" stopColor="#f8f8f8" />
                  <stop offset={1} stopColor="#fff" />
                </linearGradient>
                <radialGradient
                  id="radial-gradient-28"
                  cx="0.04"
                  cy="0.313"
                  r="1.144"
                  gradientTransform="translate(-0.085) scale(1.171 1)"
                  xlinkHref="#radial-gradient-3"
                />
                <linearGradient
                  id="linear-gradient-41"
                  x1="1.049"
                  y1="0.716"
                  x2="-0.147"
                  y2="0.246"
                  xlinkHref="#linear-gradient-36"
                />
                <linearGradient
                  id="linear-gradient-42"
                  x1="0.397"
                  y1="-1.536"
                  x2="1.04"
                  y2="8.208"
                  xlinkHref="#linear-gradient-36"
                />
              </defs>
              <g id="road" transform="translate(-606 -133)">
                <path
                  className="jss63"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Path_192775"
                  data-name="Path 192775"
                  d="M773.157,536.487l297.988-167.8,179.679,105.254,96.7-71.9"
                  transform="translate(-7.707)"
                  fill="none"
                  stroke="url(#linear-gradient-road)"
                  strokeLinejoin="round"
                  strokeWidth={5}
                />
              </g>
              <g className="jss76" id="otonom_icons">
                <rect
                  id="Rectangle_39842"
                  data-name="Rectangle 39842"
                  width={745}
                  height={480}
                  transform="translate(606 133)"
                  fill="#fff"
                  opacity={0}
                />
                <g id="Group_107966" data-name="Group 107966">
                  <g
                    id="Group_107946"
                    data-name="Group 107946"
                    transform="translate(769.252 -75.348)"
                    style={{ isolation: 'isolate' }}
                  >
                    <g className="jss74" id="Group_70515" data-name="Group 70515" transform="translate(4.573 278.72)">
                      <g
                        id="point1"
                        transform="translate(415.524 301.169)"
                        style={{ '--t': 'translate(415.524px, 301.169px)' }}
                      >
                        <g id="regulatory--stop--g1" transform="translate(0)">
                          <path
                            id="Path_54964"
                            data-name="Path 54964"
                            d="M9.6,1.434c.339-.294.613-.815,1.132-.741C14.969.7,19.207.692,23.446.7c3.09,3.076,6.148,6.18,9.234,9.261q.04,6.6,0,13.209c-3.038,3.027-6.052,6.079-9.083,9.11-.2.229-.529.141-.791.165-4.143-.016-8.286,0-12.429-.008-3.1-3.048-6.087-6.206-9.231-9.2q-.038-6.67,0-13.343C4,7.116,6.778,4.252,9.6,1.436Zm-4,9.011c-2.114.678-2.566,3.505-1.523,5.24C4.789,16.823,6.21,17,7.282,17.63c.851.975.886,3.456-.822,3.454-1,.09-1.351-1.055-1.3-1.856H3.487a3.315,3.315,0,0,0,.953,2.852,3.093,3.093,0,0,0,4.413-.354,5.029,5.029,0,0,0,.5-4.07c-.384-1.4-1.833-2-3.083-2.4-1.527-.426-1.268-3.474.486-3.162.893.088,1.059,1.107,1.025,1.838.575,0,1.149,0,1.725-.008A3.084,3.084,0,0,0,5.6,10.444Zm13.732-.088A2.868,2.868,0,0,0,17,13.082q-.006,3.485,0,6.972a2.91,2.91,0,0,0,2.964,2.791,3.006,3.006,0,0,0,2.935-2.98c.006-2.257.02-4.517-.007-6.772A2.992,2.992,0,0,0,19.327,10.357Zm5.318.411c.011,3.985,0,7.973.007,11.958a4.059,4.059,0,0,0,1.783-.1c-.041-1.557-.008-3.116-.021-4.671,1.172.018,2.546-.1,3.314-1.117a5.829,5.829,0,0,0,.443-4.563c-.575-1.794-2.74-2.067-4.347-1.951-.378.1-1.277-.21-1.177.448Zm-14.487-.383c-.006.551-.006,1.1-.007,1.653.7.055,1.4.021,2.093.04,0,3.542.006,7.085,0,10.626a10.505,10.505,0,0,0,1.75.047c.045-3.559,0-7.119.02-10.678.63-.014,1.261.023,1.889-.016.425-.414.115-1.131.2-1.669q-2.97-.014-5.94,0Z"
                            transform="translate(-0.999 -0.686)"
                            fill="#c1121c"
                          />
                          <path
                            id="Path_54965"
                            data-name="Path 54965"
                            d="M14.606,8.777a1.2,1.2,0,0,1,1.458,1.175c-.013,2.319.059,4.646-.035,6.961a1.22,1.22,0,0,1-2.362-.2c-.112-2.133-.014-4.276-.049-6.412-.041-.644.27-1.444.99-1.529Zm6.745-.025c.758-.013,1.844-.162,2.193.717a5.488,5.488,0,0,1-.013,2.75c-.353.853-1.428.74-2.178.719q-.011-2.093,0-4.185Z"
                            transform="translate(4.068 2.627)"
                            fill="#c1121c"
                          />
                          <path
                            id="Path_54966"
                            data-name="Path 54966"
                            d="M1.036,7.9a1.7,1.7,0,0,1,.146-.692q-.03,6.67,0,13.343a1.273,1.273,0,0,1-.141-.508C1.05,16,1.066,11.948,1.036,7.9Z"
                            transform="translate(-1.036 1.999)"
                            fill="#090002"
                            opacity="0.23"
                          />
                          <path
                            id="Path_54967"
                            data-name="Path 54967"
                            d="M4.92,7.648a3.084,3.084,0,0,1,3.915,3.477c-.575.007-1.149.008-1.725.008.034-.731-.131-1.75-1.025-1.838-1.754-.312-2.013,2.736-.486,3.162,1.25.4,2.7,1,3.083,2.4a5.025,5.025,0,0,1-.5,4.07,3.093,3.093,0,0,1-4.413.354,3.315,3.315,0,0,1-.953-2.852H4.48c-.048.8.308,1.947,1.3,1.856,1.708,0,1.673-2.479.822-3.454-1.071-.63-2.491-.807-3.21-1.945C2.351,11.155,2.8,8.327,4.918,7.65Zm13.732-.088A2.991,2.991,0,0,1,22.216,10.3c.027,2.256.013,4.515.007,6.772a3.007,3.007,0,0,1-2.935,2.98,2.91,2.91,0,0,1-2.964-2.791q-.008-3.485,0-6.972a2.868,2.868,0,0,1,2.328-2.725ZM19,9.294c-.72.083-1.03.885-.99,1.529.035,2.136-.062,4.28.049,6.412a1.22,1.22,0,0,0,2.362.2c.094-2.317.022-4.642.035-6.961A1.2,1.2,0,0,0,19,9.3Zm4.972-1.323c-.1-.658.8-.346,1.177-.448,1.607-.116,3.772.157,4.347,1.951a5.829,5.829,0,0,1-.443,4.563c-.768,1.016-2.141,1.134-3.314,1.117.013,1.557-.02,3.116.021,4.671a4.059,4.059,0,0,1-1.783.1c-.007-3.985,0-7.973-.007-11.958Zm1.773,1.3c0,1.395-.006,2.789,0,4.186.749.021,1.823.134,2.178-.719a5.488,5.488,0,0,0,.013-2.75c-.349-.879-1.435-.73-2.193-.717ZM9.483,7.589q2.97-.013,5.94,0c-.082.538.228,1.255-.2,1.669-.628.04-1.26,0-1.889.016-.015,3.559.025,7.119-.02,10.678a10.5,10.5,0,0,1-1.75-.047c.008-3.542,0-7.085,0-10.626-.7-.018-1.4.016-2.093-.04,0-.551,0-1.1.007-1.653Z"
                            transform="translate(-0.324 2.111)"
                            fill="#fffefe"
                          />
                        </g>
                      </g>
                      <g
                        id="_30_m_seg"
                        data-name="30_m_seg"
                        transform="translate(-4.451 109.242)"
                        style={{ '--t': 'translate(-4.451px, 109.242px)' }}
                      >
                        <path
                          id="Path_54972"
                          data-name="Path 54972"
                          d="M28993.48,16162.988l15.781,15.85a3.4,3.4,0,0,1,.98,2.412h.008a3.445,3.445,0,0,1-.988,2.414l-15.687,15.742a3.351,3.351,0,0,1-2.4,1v-.012a3.379,3.379,0,0,1-2.4-.984l-15.781-15.85a3.41,3.41,0,0,1-.984-2.412H28972a3.4,3.4,0,0,1,1-2.412l15.68-15.744a3.34,3.34,0,0,1,2.4-.986h0A3.364,3.364,0,0,1,28993.48,16162.988Zm12.883,17.158-14.187-14.246a1.566,1.566,0,0,0-2.2,0l-14.074,14.145a1.506,1.506,0,0,0-.453,1.1h0a1.542,1.542,0,0,0,.453,1.1l14.184,14.238a1.532,1.532,0,0,0,1.094.463h0a1.582,1.582,0,0,0,1.105-.449l14.082-14.145a1.587,1.587,0,0,0,.453-1.1h0A1.573,1.573,0,0,0,29006.363,16180.146Z"
                          transform="translate(-28972 -16162.002)"
                        />
                        <path
                          id="Path_54973"
                          data-name="Path 54973"
                          d="M29164.426,16336.5l-15-15.064a1.5,1.5,0,0,0-1.051-.432,1.472,1.472,0,0,0-1.039.432l-14.895,14.965a1.44,1.44,0,0,0-.437,1.049h0a1.444,1.444,0,0,0,.438,1.045l15,15.055a1.426,1.426,0,0,0,1.039.439h0a1.47,1.47,0,0,0,1.043-.426l14.91-14.971a1.527,1.527,0,0,0,.426-1.043h0A1.534,1.534,0,0,0,29164.426,16336.5Z"
                          transform="translate(-29129.299 -16318.3)"
                          fill="#fbbc04"
                        />
                        <path
                          id="Union_106"
                          data-name="Union 106"
                          d="M13.695,11.211c-.026-.012-.085,0-.111-.012s.013-.051,0-.065c-.035-.039-.146-.1-.146-.154s.1-.078.123-.078a.358.358,0,0,0,.109-.011c.1-.052.185-.22.307-.22a.716.716,0,0,1,.38.1c.037.016-.062,0-.036.027.036.052.2.118.2.181s-.088.246-.16.219-.135.052-.207.066a.218.218,0,0,1-.062,0,.141.141,0,0,0-.124.026.059.059,0,0,1-.044.017A.621.621,0,0,1,13.695,11.211ZM5.362,9.976c-.063-.027-.172,0-.209-.039-.037-.015.012-.1-.013-.117-.072-.09-.28-.219-.28-.31,0-.075.2-.141.231-.153a.661.661,0,0,0,.221-.027c.183-.077.343-.412.588-.412a1.557,1.557,0,0,1,.735.181c.062.038-.111.024-.074.077.074.088.38.219.38.333,0,.156-.172.466-.318.412-.111-.039-.245.117-.393.144a.605.605,0,0,1-.109,0,.3.3,0,0,0-.258.055.088.088,0,0,1-.073.029A1.349,1.349,0,0,1,5.362,9.976Zm3.683-.27c-.025-.015-.085,0-.1-.027-.024,0,0-.05-.012-.066-.038-.038-.147-.1-.147-.153s.1-.079.124-.079a.459.459,0,0,0,.123-.012.327.327,0,0,0,.091-.08,29.094,29.094,0,0,1-3.63-1.172c-.587-.2-1.859,0-2.325-.256-.293-.168.184-.787-.048-.967C2.289,6.275,0,5.272,0,4.524c0-.541,2.08-1.045,2.485-1.108a17.683,17.683,0,0,0,2.533-.258C6.976,2.553,8.849,0,11.542,0a22.72,22.72,0,0,1,8.15,1.445c.674.256-1.174.141-.782.5.807.76,4.16,1.727,4.16,2.577,0,1.264-1.9,3.635-3.487,3.235-1.26-.31-2.693.824-4.333,1.043A7.878,7.878,0,0,1,13.859,8.8a4.1,4.1,0,0,0-2.709.419,1.905,1.905,0,0,1-1.321.194.085.085,0,0,1,.035.052c0,.09-.085.246-.158.219s-.122.052-.208.066a.217.217,0,0,1-.066,0,.138.138,0,0,0-.119.025.067.067,0,0,1-.052.019A.582.582,0,0,1,9.044,9.706Z"
                          transform="translate(7.591 16.304)"
                        />
                      </g>
                      <g
                        id="_42_m_seg"
                        data-name="42_m_seg"
                        transform="translate(315.053 301.169)"
                        style={{ '--t': 'translate(315.053px, 301.169px)' }}
                      >
                        <path
                          id="Path_54990"
                          data-name="Path 54990"
                          d="M2566.972,16419.359c-.916.527-8.666,5.881-9.644,6.609-1.554,1.156-2.765,2.576-2.765,4.525-.016,4.725,0,18.271,0,20.213a5.461,5.461,0,0,0,.807,3.441,2.945,2.945,0,0,0,2.407,1.354c2.268-.012,3.168-2.244,3.168-5.033v-19.1c0-1.416,8.185-5.926,9.862-7.748C2573.6,16420.605,2569.969,16417.605,2566.972,16419.359Z"
                          transform="translate(-2552.649 -16418.84)"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_54991"
                          data-name="Path 54991"
                          d="M2676.191,16572.693c-.124-.707-.062-14.4-.047-20.539a4.58,4.58,0,0,1,2-3.816c1.459-1,8.542-5.732,9.3-6.307.932-.373,1.289-.311,1.6.051.233.277.668.748-.062,1.281-2,1.494-10.235,5.939-10.266,8.42-.125,7.389-.016,15.836-.016,17.4,0,1.2.171,3.578-.326,4.324C2677.713,16574.518,2676.439,16574.125,2676.191,16572.693Z"
                          transform="translate(-2672.32 -16539.867)"
                          fill="#fefefe"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_54992"
                          data-name="Path 54992"
                          d="M2436.561,18744h.621l1.445.045c2.966.02,3.6,2.094,3.541,5.115-.016,1.232-.544,1.279-1.429,1.279-.854-.01-.249,0-3.557,0h-.621c-3.309,0-2.532-.01-3.371,0-.9,0-1.413-.047-1.444-1.279-.062-3.021.575-5.1,3.556-5.115Z"
                          transform="translate(-2431.742 -18713.779)"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_54993"
                          data-name="Path 54993"
                          d="M2549.784,18884.391c2.718.043,2.517.012,3.324.012.186-1.324-.543-2.121-1.507-2.141-1.336-.012-2.625-.012-3.945,0-.963.02-1.694.816-1.507,2.141C2546.414,18884.4,2549.784,18884.371,2549.784,18884.391Z"
                          transform="translate(-2544.344 -18849.875)"
                          fill="#fefefe"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_54994"
                          data-name="Path 54994"
                          d="M2940.214,16588.885h0l.326-.229.326-.234h0l1.491-1.125c3.122-2.264,2.61-4.43.792-6.85-.729-.98-1.3-.635-2.252.053-.87.641-.248.174-3.742,2.664l-.156.109-.016.016-.155.094-.015.018-.156.107-.015.016-.14.111c-3.495,2.48-2.671,1.918-3.556,2.535-.963.664-1.476,1.1-.792,2.125,1.677,2.516,3.54,3.73,6.693,1.5Z"
                          transform="translate(-2924.074 -16577.326)"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_54995"
                          data-name="Path 54995"
                          d="M3104.6,16737a1.833,1.833,0,0,1-.373,2.977c-1.43,1.051-2.843,2.064-4.287,3.076a1.845,1.845,0,0,1-2.936-.641C3099.578,16740.6,3102.048,16738.84,3104.6,16737Z"
                          transform="translate(-3086.668 -16732.039)"
                          fill="#fbbc04"
                          fillRule="evenodd"
                        />
                      </g>
                      <g
                        id="Group_70512"
                        data-name="Group 70512"
                        transform="translate(169.886 63.837)"
                        style={{ '--t': 'translate(169.886px, 63.837px)' }}
                      >
                        <path
                          id="Rectangle_19308"
                          data-name="Rectangle 19308"
                          d="M1.518,0h30.1a1.518,1.518,0,0,1,1.518,1.518V31.757a1.52,1.52,0,0,1-1.52,1.52H1.519A1.519,1.519,0,0,1,0,31.758V1.518A1.518,1.518,0,0,1,1.518,0Z"
                          transform="translate(0 0)"
                          fill="#e7e8e8"
                        />
                        <rect
                          id="Rectangle_19310"
                          data-name="Rectangle 19310"
                          width="28.202"
                          height="28.32"
                          rx="0.5"
                          transform="translate(2.468 2.477)"
                          fill="#0a51a2"
                        />
                        <path
                          id="Path_55002"
                          data-name="Path 55002"
                          d="M229.548,370.447a.493.493,0,0,0,.428-.249.5.5,0,0,0,0-.5l-12.39-21.552a.495.495,0,0,0-.857,0L204.336,369.7a.5.5,0,0,0,0,.5.5.5,0,0,0,.429.249Z"
                          transform="translate(-200.589 -343.208)"
                          fill="#eee"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_55003"
                          data-name="Path 55003"
                          d="M208,367.254h1.721l.706-2.659h-1.015L208,367.254Zm11.865-2.659h-1.013l.706,2.659h1.719l-1.412-2.659Zm-4.718,0h-1.015l-.354,2.659H215.5l-.354-2.659Zm-.389-14.1a1.325,1.325,0,1,0,.844,1.671,1.318,1.318,0,0,0-.844-1.671Zm3.329,15.536a2.042,2.042,0,0,1-.887,1.228,55.408,55.408,0,0,1-2.762-6.464,7.639,7.639,0,0,0-1.152,1.7c-.112.36-.978,4.379-1.072,4.536a2.4,2.4,0,0,1-1.219-.168c-.107-.074.649-4.263.733-4.767a8.523,8.523,0,0,1,1.91-3.342c-.059-1.024-.109-1.974-.149-2.742-.277.381-.485,1.12-.6,1.213a19.349,19.349,0,0,1-2.969.883,4.229,4.229,0,0,1-.706-.564c-.023-.064,2.682-1.063,2.744-1.118s1.456-2.488,1.456-2.488h0a1.854,1.854,0,0,1,2.4-.413h0a18.15,18.15,0,0,1,2.657,2.473,23.121,23.121,0,0,1-.114,3.222c-.02.121-.674.443-.741.438s-.243-2.91-.273-2.964c-.02-.039-.834-.655-1.167-.886.1,1.132.208,2.407.208,2.976a2.086,2.086,0,0,1-.5,1.053S218.082,365.708,218.082,366.026Z"
                          transform="translate(-198.064 -341.484)"
                          fill="#001827"
                          fillRule="evenodd"
                        />
                      </g>
                      <g
                        id="Group_70514"
                        data-name="Group 70514"
                        transform="translate(123.374 337.831)"
                        style={{ '--t': 'translate(123.374px, 337.831px)' }}
                      >
                        <g id="Group_70513" data-name="Group 70513" transform="translate(0 0)">
                          <path
                            id="Path_55004"
                            data-name="Path 55004"
                            d="M268.39,377.427a12.587,12.587,0,1,0,12.536,12.586A12.561,12.561,0,0,0,268.39,377.427Z"
                            transform="translate(-251.821 -373.376)"
                            fill="#0a51a2"
                            fillRule="evenodd"
                          />
                          <path
                            id="Path_55005"
                            data-name="Path 55005"
                            d="M279.469,398.288l-7.314-7.345,7.322-7.35a12.592,12.592,0,0,1-.008,14.694Zm-17.487,2.871a12.459,12.459,0,0,0,14.634-.006l-7.313-7.345-7.321,7.351Zm-5.215-10.216a12.548,12.548,0,0,1,2.37-7.345l7.313,7.345-7.321,7.352a12.572,12.572,0,0,1-2.362-7.352Zm19.856-10.215a12.461,12.461,0,0,0-14.635.006l7.314,7.345,7.321-7.351Zm-7.321-6.423a16.638,16.638,0,1,0,16.57,16.638A16.6,16.6,0,0,0,269.3,374.306Z"
                            transform="translate(-252.734 -374.306)"
                            fill="#ec1d24"
                            fillRule="evenodd"
                          />
                        </g>
                        <path
                          id="Path_55006"
                          data-name="Path 55006"
                          d="M258.006,381.264l7.573,7.6L258,396.482l-.518-.52,7.062-7.092-7.055-7.084Z"
                          transform="translate(-251.344 -372.232)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_55007"
                          data-name="Path 55007"
                          d="M274.842,379.58l-7.573,7.6-7.581-7.611.518-.52,7.063,7.091,7.055-7.084Z"
                          transform="translate(-250.699 -372.891)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_55008"
                          data-name="Path 55008"
                          d="M274.93,396.477l-7.573-7.6,7.58-7.613.518.52-7.062,7.092,7.055,7.084Z"
                          transform="translate(-248.453 -372.233)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_55009"
                          data-name="Path 55009"
                          d="M259.692,396.534l7.573-7.6,7.581,7.611-.518.52-7.063-7.091-7.055,7.084Z"
                          transform="translate(-250.697 -369.947)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g id="otonom_radar" transform="translate(174 -10070)">
                <rect
                  id="Rectangle_39844"
                  data-name="Rectangle 39844"
                  width={745}
                  height={480}
                  transform="translate(-174 10070)"
                  fill="#fff"
                  opacity={0}
                />
                <ellipse
                  className="jss72"
                  id="Ellipse_2637"
                  data-name="Ellipse 2637"
                  cx="145.069"
                  cy="251.277"
                  rx="145.069"
                  ry="251.277"
                  transform="translate(-170.971 10543.697) scale(0) rotate(-89.689)"
                  opacity="0.16"
                  fill="rgb(0,116,233,.3)"
                />
                <g id="Group_107973" data-name="Group 107973" transform="translate(-170.971 10253.284)" opacity="0.64">
                  <g
                    className="jss66"
                    id="Group_107411"
                    data-name="Group 107411"
                    transform="translate(115.058 66.565) scale(0)"
                    opacity="0.1"
                  >
                    <path
                      id="Path_190077"
                      data-name="Path 190077"
                      d="M453.041,409.015c-36.732,0-71.337-8.3-97.439-23.369-26.407-15.247-40.951-35.587-40.951-57.276,0-21.5,14.33-41.617,40.349-56.64,25.715-14.846,59.928-23.022,96.337-23.022,36.732,0,71.336,8.3,97.437,23.369,26.407,15.247,40.951,35.589,40.951,57.278,0,21.5-14.33,41.617-40.349,56.64C523.661,400.84,489.45,409.015,453.041,409.015Zm-1.7-156.773c-35.8,0-69.383,8.009-94.57,22.551-24.879,14.365-38.582,33.391-38.582,53.578,0,20.372,13.917,39.628,39.185,54.214,25.574,14.766,59.55,22.9,95.672,22.9,35.8,0,69.382-8.007,94.568-22.547,24.879-14.365,38.582-33.393,38.582-53.58,0-20.374-13.917-39.628-39.184-54.216C521.434,260.372,487.457,252.241,451.336,252.241Z"
                      transform="translate(-314.651 -248.708)"
                      fill="rgb(0,116,233)"
                    />
                  </g>
                  <g
                    className="jss68"
                    id="Group_107412"
                    data-name="Group 107412"
                    transform="translate(59.55 34.195) scale(0)"
                    opacity="0.25"
                  >
                    <path
                      id="Path_190078"
                      data-name="Path 190078"
                      d="M476.984,455.437c-51.668,0-100.326-11.719-137.012-33-36.911-21.408-57.24-49.9-57.24-80.228,0-30.063,20.026-58.235,56.39-79.327,36.137-20.959,84.241-32.5,135.45-32.5,51.668,0,100.326,11.717,137.01,32.992,36.911,21.411,57.24,49.9,57.24,80.231,0,30.061-20.028,58.235-56.392,79.325C576.294,443.893,528.191,455.437,476.984,455.437Zm-2.411-222.4c-50.754,0-98.389,11.417-134.131,32.146-35.513,20.6-55.071,47.956-55.071,77.032,0,29.34,19.861,57.018,55.921,77.933,36.29,21.047,84.478,32.641,135.693,32.641,50.752,0,98.386-11.417,134.128-32.148,35.513-20.6,55.073-47.953,55.073-77.03,0-29.342-19.859-57.02-55.921-77.936C573.975,244.626,525.785,233.036,474.572,233.036Z"
                      transform="translate(-282.732 -230.386)"
                      fill="rgb(0,116,233)"
                    />
                  </g>
                  <g className="jss70" id="Group_107413" data-name="Group 107413" opacity="0.3" transform="scale(0)">
                    <path
                      id="Path_190079"
                      data-name="Path 190079"
                      d="M503.2,504.47c-67.687,0-131.418-15.328-179.45-43.158-48.187-27.916-74.724-65.021-74.724-104.478,0-39.109,26.141-75.793,73.61-103.292,47.315-27.414,110.319-42.511,177.4-42.511,67.687,0,131.418,15.326,179.452,43.156,48.185,27.918,74.724,65.023,74.724,104.48,0,39.107-26.143,75.791-73.61,103.292C633.29,489.372,570.287,504.47,503.2,504.47ZM500.04,212.8c-66.78,0-129.473,15.012-176.524,42.273-46.9,27.174-72.729,63.313-72.729,101.764,0,38.8,26.224,75.36,73.844,102.95C372.4,487.46,435.818,502.7,503.2,502.7c66.782,0,129.473-15.014,176.526-42.275,46.9-27.172,72.729-63.313,72.729-101.762,0-38.8-26.226-75.36-73.844-102.951C630.84,228.039,567.422,212.8,500.04,212.8Z"
                      transform="translate(-249.026 -211.031)"
                      fill="rgb(0,116,233)"
                    />
                  </g>
                </g>
              </g>
              <g id="otonom_car" transform="translate(-606 -133)">
                <rect
                  id="Rectangle_39842"
                  data-name="Rectangle 39842"
                  width={745}
                  height={480}
                  transform="translate(606 133)"
                  fill="#fff"
                  opacity={0}
                />
                <g id="Group_107966" data-name="Group 107966">
                  <g
                    id="Group_107428"
                    data-name="Group 107428"
                    transform="translate(296.122 26.579)"
                    style={{ mixBlendMode: 'luminosity', isolation: 'isolate' }}
                  >
                    <g id="Group_107425" data-name="Group 107425" className="jss54">
                      <path
                        id="Path_190080"
                        data-name="Path 190080"
                        d="M403.654,325.684l-24.879-11.991,26.3-8.943Z"
                        transform="translate(-282.741 -201.495)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_190081"
                        data-name="Path 190081"
                        d="M470.2,288.02l-24.879-11.991,26.3-8.942Z"
                        transform="translate(-231.718 -230.374)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_190082"
                        data-name="Path 190082"
                        d="M567.228,307.22,432.452,384.128a74.523,74.523,0,0,1-74.18-.178l-31.459-18.155a4.788,4.788,0,0,1-.007-8.291L495.371,259.84a4.789,4.789,0,0,1,4.811.005l67.083,39.077A4.79,4.79,0,0,1,567.228,307.22Z"
                        transform="translate(-324.418 -236.425)"
                        fill="#16032e"
                        opacity="0.2"
                      />
                      <g id="Group_107415" data-name="Group 107415" transform="translate(199.912 43.217)">
                        <path
                          id="Path_190083"
                          data-name="Path 190083"
                          d="M437.571,296.871c0,4.321,1.491,7.381,3.915,8.864.074.044,7.659,4.434,7.733,4.475,2.521,1.41.908-1.79,4.738-4,7.708-4.45,13.957-15.229,13.957-24.074,0-4.374,4.044-4.41,1.567-5.871-.069-.041-8.139-4.507-8.21-4.544-2.516-1.362-5.952-1.111-9.744,1.076C443.82,277.248,437.571,288.027,437.571,296.871Z"
                          transform="translate(-437.571 -270.681)"
                          fill="url(#linear-gradient-3)"
                        />
                        <ellipse
                          id="Ellipse_2606"
                          data-name="Ellipse 2606"
                          cx="19.677"
                          cy="11.36"
                          rx="19.677"
                          ry="11.36"
                          transform="matrix(0.505, -0.863, 0.863, 0.505, 2.303, 33.974)"
                          fill="url(#linear-gradient-4)"
                        />
                        <path
                          id="Path_190084"
                          data-name="Path 190084"
                          d="M455.724,275.205c3.7-2.134,7.053-2.422,9.549-1.173-2.327-.65-5.215-.164-8.342,1.641-7.708,4.45-13.957,15.229-13.957,24.074,0,4.606,1.7,7.774,4.408,9.13-3.408-.954-5.615-4.344-5.615-9.6C441.767,290.433,448.016,279.655,455.724,275.205Z"
                          transform="translate(-434.354 -268.834)"
                          fill="url(#radial-gradient)"
                          style={{ mixBlendMode: 'screen', isolation: 'isolate' }}
                        />
                        <path
                          id="Path_190085"
                          data-name="Path 190085"
                          d="M443.7,295.958c0,6.811,4.813,9.555,10.749,6.127S465.2,290.357,465.2,283.547s-4.813-9.556-10.749-6.129S443.7,289.145,443.7,295.958Zm7.1-4.3q-.005.1-.005.2c0,.067,0,.134.005.2a1.912,1.912,0,0,1-.452,1.185l-3.336,4.134c-.5.62-1.145.7-1.3.147a9.612,9.612,0,0,1-.316-2.548,14.315,14.315,0,0,1,.316-2.915c.152-.726.8-1.392,1.3-1.35l3.336.284C450.631,291.022,450.813,291.272,450.8,291.661Zm-2.774-5.514a20.472,20.472,0,0,1,4.106-5.1c.564-.5,1.117-.329,1.117.339V285.8a1.969,1.969,0,0,1-.477,1.2c-.1.118-.2.242-.3.369a1.175,1.175,0,0,1-.922.546l-3.332-.284C447.718,287.583,447.617,286.852,448.023,286.147Zm8.747-7.777a5.266,5.266,0,0,1,4.1.357c.408.235.307,1.083-.193,1.7l-3.334,4.132a1.122,1.122,0,0,1-.922.518,2.288,2.288,0,0,0-.3-.025c-.3-.005-.475-.265-.475-.648V280A1.862,1.862,0,0,1,456.77,278.37Zm6.415,3.606a9.611,9.611,0,0,1,.318,2.549,14.328,14.328,0,0,1-.318,2.915c-.152.726-.8,1.392-1.3,1.35l-3.334-.284c-.288-.025-.468-.274-.452-.663,0-.069,0-.136,0-.2s0-.133,0-.2a1.9,1.9,0,0,1,.452-1.184l3.334-4.134C462.389,281.5,463.033,281.425,463.185,281.976Zm-2.311,11.381a20.419,20.419,0,0,1-4.1,5.1c-.564.5-1.117.33-1.117-.339v-4.406a1.962,1.962,0,0,1,.475-1.2c.1-.12.2-.244.3-.369a1.173,1.173,0,0,1,.922-.546l3.334.284C461.182,291.921,461.283,292.65,460.874,293.357Zm-8.745,7.775a5.257,5.257,0,0,1-4.106-.357c-.406-.235-.306-1.081.194-1.7l3.332-4.132a1.131,1.131,0,0,1,.922-.519,2.011,2.011,0,0,0,.3.026c.3.005.477.263.477.648V299.5A1.858,1.858,0,0,1,452.129,301.133Z"
                          transform="translate(-432.872 -266.802)"
                          fill="url(#linear-gradient-5)"
                          style={{ mixBlendMode: 'multiply', isolation: 'isolate' }}
                        />
                        <path
                          id="Path_190086"
                          data-name="Path 190086"
                          d="M444.079,296.108c0,6.813,4.813,9.556,10.749,6.129s10.749-11.728,10.749-18.54-4.813-9.555-10.749-6.127S444.079,289.3,444.079,296.108Zm7.1-4.3c0,.069-.005.136-.005.2s0,.132.005.2a1.92,1.92,0,0,1-.452,1.185l-3.334,4.134c-.5.618-1.147.7-1.3.147a9.612,9.612,0,0,1-.316-2.548,14.3,14.3,0,0,1,.316-2.915c.152-.728.8-1.394,1.3-1.352l3.334.284C451.01,291.174,451.192,291.424,451.176,291.811ZM448.4,286.3a20.44,20.44,0,0,1,4.106-5.1c.564-.5,1.117-.33,1.117.339v4.406a1.974,1.974,0,0,1-.477,1.2c-.1.118-.2.242-.3.367a1.17,1.17,0,0,1-.922.546l-3.332-.284C448.1,287.734,448,287,448.4,286.3Zm8.747-7.777a5.258,5.258,0,0,1,4.1.357c.408.235.307,1.081-.193,1.7l-3.334,4.132a1.128,1.128,0,0,1-.92.519,2.066,2.066,0,0,0-.3-.026c-.3-.005-.475-.263-.475-.648v-4.406A1.858,1.858,0,0,1,457.149,278.522Zm6.415,3.606a9.609,9.609,0,0,1,.318,2.548,14.306,14.306,0,0,1-.318,2.915c-.152.728-.8,1.392-1.3,1.35l-3.334-.283c-.288-.025-.468-.276-.452-.664,0-.067,0-.134,0-.2s0-.132,0-.2a1.905,1.905,0,0,1,.452-1.185l3.334-4.134C462.768,281.656,463.412,281.577,463.564,282.128Zm-2.311,11.38a20.4,20.4,0,0,1-4.1,5.1c-.564.5-1.117.33-1.117-.339v-4.406a1.971,1.971,0,0,1,.475-1.2c.1-.118.2-.242.3-.367a1.168,1.168,0,0,1,.92-.546l3.334.283C461.561,292.073,461.662,292.8,461.253,293.507Zm-8.745,7.777a5.264,5.264,0,0,1-4.106-.357c-.406-.235-.306-1.081.194-1.7l3.334-4.134a1.124,1.124,0,0,1,.92-.518,2.014,2.014,0,0,0,.3.027c.3.005.477.263.477.648v4.406A1.86,1.86,0,0,1,452.508,301.285Z"
                          transform="translate(-432.581 -266.685)"
                          fill="url(#linear-gradient-6)"
                        />
                      </g>
                      <g id="Group_107416" data-name="Group 107416" transform="translate(82.654 109.092)">
                        <path
                          id="Path_190087"
                          data-name="Path 190087"
                          d="M371.2,334.157c0,4.321,1.491,7.381,3.915,8.864.072.044,7.657,4.435,7.731,4.475,2.523,1.41.91-1.79,4.74-4,7.708-4.45,13.957-15.229,13.957-24.075,0-4.373,4.042-4.408,1.567-5.869-.069-.041-8.139-4.507-8.21-4.544-2.516-1.362-5.952-1.111-9.744,1.076C377.45,314.534,371.2,325.313,371.2,334.157Z"
                          transform="translate(-371.201 -307.967)"
                          fill="url(#linear-gradient-7)"
                        />
                        <ellipse
                          id="Ellipse_2607"
                          data-name="Ellipse 2607"
                          cx="19.677"
                          cy="11.36"
                          rx="19.677"
                          ry="11.36"
                          transform="matrix(0.505, -0.863, 0.863, 0.505, 2.303, 33.974)"
                          fill="url(#linear-gradient-8)"
                        />
                        <path
                          id="Path_190088"
                          data-name="Path 190088"
                          d="M389.354,312.491c3.7-2.134,7.053-2.422,9.549-1.173-2.327-.65-5.215-.164-8.344,1.641-7.708,4.45-13.956,15.229-13.956,24.074,0,4.606,1.7,7.774,4.408,9.13-3.408-.954-5.615-4.344-5.615-9.6C375.4,327.719,381.646,316.941,389.354,312.491Z"
                          transform="translate(-367.984 -306.12)"
                          fill="url(#radial-gradient-2)"
                          style={{ mixBlendMode: 'screen', isolation: 'isolate' }}
                        />
                        <path
                          id="Path_190089"
                          data-name="Path 190089"
                          d="M377.33,333.244c0,6.811,4.813,9.555,10.749,6.127s10.749-11.728,10.749-18.538-4.813-9.556-10.749-6.129S377.33,326.431,377.33,333.244Zm7.1-4.3c0,.067,0,.134,0,.2s0,.134,0,.2a1.91,1.91,0,0,1-.451,1.185l-3.336,4.134c-.5.62-1.145.7-1.3.147a9.607,9.607,0,0,1-.318-2.548,14.313,14.313,0,0,1,.318-2.915c.152-.726.8-1.392,1.3-1.35l3.336.283C384.261,328.308,384.441,328.558,384.425,328.947Zm-2.772-5.514a20.472,20.472,0,0,1,4.1-5.1c.564-.5,1.117-.329,1.117.339v4.408a1.967,1.967,0,0,1-.475,1.2c-.1.118-.2.242-.3.369a1.168,1.168,0,0,1-.922.544l-3.332-.283C381.346,324.869,381.247,324.138,381.653,323.433Zm8.747-7.777a5.268,5.268,0,0,1,4.1.357c.406.237.306,1.083-.194,1.7l-3.332,4.132a1.124,1.124,0,0,1-.922.518,2.014,2.014,0,0,0-.3-.025c-.3-.005-.475-.265-.475-.648v-4.408A1.862,1.862,0,0,1,390.4,315.656Zm6.415,3.606a9.613,9.613,0,0,1,.316,2.549,14.323,14.323,0,0,1-.316,2.915c-.152.726-.8,1.392-1.3,1.35l-3.336-.284c-.286-.025-.466-.274-.451-.663,0-.069,0-.136,0-.2s0-.133,0-.2a1.909,1.909,0,0,1,.451-1.184l3.336-4.134C396.019,318.79,396.663,318.711,396.815,319.262ZM394.5,330.643a20.5,20.5,0,0,1-4.1,5.1c-.564.5-1.117.33-1.117-.339v-4.406a1.962,1.962,0,0,1,.475-1.2c.1-.12.2-.244.3-.369a1.17,1.17,0,0,1,.922-.546l3.332.284C394.81,329.207,394.911,329.936,394.5,330.643Zm-8.747,7.775a5.261,5.261,0,0,1-4.1-.357c-.406-.235-.307-1.081.194-1.7l3.332-4.132a1.131,1.131,0,0,1,.922-.519,2.018,2.018,0,0,0,.3.026c.3.005.475.263.475.648v4.406A1.858,1.858,0,0,1,385.757,338.419Z"
                          transform="translate(-366.502 -304.087)"
                          fill="url(#linear-gradient-9)"
                          style={{ mixBlendMode: 'multiply', isolation: 'isolate' }}
                        />
                        <path
                          id="Path_190090"
                          data-name="Path 190090"
                          d="M377.709,333.394c0,6.813,4.813,9.556,10.749,6.129s10.749-11.728,10.749-18.54-4.813-9.555-10.749-6.127S377.709,326.583,377.709,333.394Zm7.1-4.3c0,.069,0,.136,0,.2s0,.133,0,.2a1.918,1.918,0,0,1-.451,1.186l-3.336,4.134c-.5.618-1.145.7-1.3.147a9.609,9.609,0,0,1-.316-2.548,14.3,14.3,0,0,1,.316-2.915c.152-.728.8-1.394,1.3-1.352l3.336.284C384.64,328.46,384.82,328.71,384.8,329.1Zm-2.772-5.512a20.473,20.473,0,0,1,4.1-5.1c.564-.5,1.117-.33,1.117.339v4.406a1.971,1.971,0,0,1-.475,1.2c-.1.118-.2.242-.3.367a1.17,1.17,0,0,1-.922.546l-3.332-.284C381.727,325.02,381.626,324.29,382.032,323.585Zm8.747-7.777a5.26,5.26,0,0,1,4.1.357c.406.235.307,1.081-.194,1.7L391.357,322a1.131,1.131,0,0,1-.922.519,2.02,2.02,0,0,0-.3-.026c-.3-.005-.475-.263-.475-.648v-4.406A1.858,1.858,0,0,1,390.779,315.808Zm6.415,3.606a9.606,9.606,0,0,1,.318,2.548,14.314,14.314,0,0,1-.318,2.915c-.152.726-.8,1.392-1.3,1.35l-3.336-.283c-.286-.025-.466-.276-.451-.664,0-.067,0-.134,0-.2s0-.133,0-.2a1.918,1.918,0,0,1,.451-1.185l3.336-4.134C396.4,318.942,397.042,318.863,397.194,319.414Zm-2.311,11.38a20.434,20.434,0,0,1-4.1,5.1c-.564.5-1.117.33-1.117-.339v-4.406a1.971,1.971,0,0,1,.475-1.2c.1-.118.2-.242.3-.369a1.173,1.173,0,0,1,.922-.544l3.332.283C395.191,329.359,395.29,330.089,394.883,330.793Zm-8.747,7.777a5.261,5.261,0,0,1-4.1-.357c-.406-.235-.306-1.081.194-1.7l3.332-4.134a1.129,1.129,0,0,1,.922-.518,2.02,2.02,0,0,0,.3.026c.3.005.475.263.475.648v4.406A1.86,1.86,0,0,1,386.136,338.571Z"
                          transform="translate(-366.211 -303.971)"
                          fill="url(#linear-gradient-10)"
                        />
                      </g>
                      <path
                        id="Path_190091"
                        data-name="Path 190091"
                        d="M426.246,360.053a14.981,14.981,0,0,1,7.449-2.235c5.562,0,9.321,3.989,9.954,12.676l84.92-45.047c-.133-3.245-.2-4.171-.2-5.147,0-9.745,6.65-21.22,15.139-26.123a14.982,14.982,0,0,1,7.449-2.233c6.076,0,10.01,4.753,10.056,12.115,3.115-3.917,7.678-10.6,7.678-16.143,0-11.572-11.254-28.563-36.905-35.877-23.627-6.738-33.582-6.993-49.626-3.574s-17.358,5.786-24.987,6.576-11.046-7.366-48.394,13.938-53.391,41.294-61.808,47.607S333.291,325.4,330.4,329.869s-5.919,26.826-1.71,33.4S376.03,391.15,387.077,392.2c10.141.965,22.16-5.714,24.061-6.814C411.481,375.818,417.983,364.824,426.246,360.053Z"
                        transform="translate(-322.736 -246.307)"
                        fill="url(#radial-gradient-3)"
                      />
                      <path
                        id="Path_190092"
                        data-name="Path 190092"
                        d="M492.561,264.553c-5.86-5.079-13.832-9.577-24.132-12.514-15.219-4.341-24.764-5.987-33.92-5.7a137.623,137.623,0,0,0-23.978,8.146c-10.448,4.8,45.882,26.591,45.882,26.591C466.091,281.793,487.683,270.94,492.561,264.553Z"
                        transform="translate(-259.383 -246.306)"
                        opacity="0.5"
                        fill="url(#linear-gradient-11)"
                      />
                      <path
                        id="Path_190093"
                        data-name="Path 190093"
                        d="M399.8,314.005s14.083-17.917,33.139-28.667c22.408-12.643,34.082-13.583,34.082-13.583l-17.512-14.311-22.5-6.4s-11.675,1.694-27.4,10.168-48.955,33.7-48.955,33.7Z"
                        transform="translate(-304.295 -242.674)"
                        opacity="0.5"
                        fill="url(#linear-gradient-12)"
                      />
                      <path
                        id="Path_190094"
                        data-name="Path 190094"
                        d="M362.819,274.581c-6.433,1.03-22.325,16.213-22.856,23.123s28.439,24.718,45.979,21.529,23.92-21.263,22.858-24.983S376.109,272.456,362.819,274.581Z"
                        transform="translate(-312.504 -224.76)"
                        fill="url(#linear-gradient-13)"
                      />
                      <path
                        id="Path_190095"
                        data-name="Path 190095"
                        d="M381.1,317.656c-13.908,0-31.98-9.927-38.31-16.761-2.152-2.325-2.184-3.438-2.17-3.638.481-6.222,16.035-21,21.78-21.923a13.561,13.561,0,0,1,2.125-.154c13.892,0,41.043,15.781,42.709,19,.231.834-.433,5.139-3.643,10.3-2.486,4-8.164,10.979-18.268,12.816a23.579,23.579,0,0,1-4.224.357Z"
                        transform="translate(-312 -224.168)"
                        fill="url(#linear-gradient-14)"
                      />
                      <path
                        id="Path_190096"
                        data-name="Path 190096"
                        d="M392.47,250.922s21.931-.615,35.344.7,27.9,6.593,35.209,13.745c6.141,6,11.77,13.07,6.247,12.281s-32.351-5.26-34.455-5.786-8.738-6.2-19.805-12.521C404.745,253.48,392.47,250.922,392.47,250.922Z"
                        transform="translate(-272.24 -242.878)"
                        fill="url(#linear-gradient-13)"
                      />
                      <path
                        id="Path_190097"
                        data-name="Path 190097"
                        d="M464.174,275.579a4.168,4.168,0,0,1-.608-.049c-5.514-.788-30.381-4.975-32.427-5.486A33.1,33.1,0,0,1,425.8,266.7c-3.429-2.366-8.125-5.6-14.183-9.062a80.132,80.132,0,0,0-15.1-6.438c1.221-.009,2.539-.014,3.924-.014,6.733,0,14.328-.132,21.4.56,13.823,1.357,27.7,6.752,34.529,13.429,6.039,5.9,8.171,9.411,8.164,10.373A1.472,1.472,0,0,1,464.174,275.579Z"
                        transform="translate(-269.137 -242.575)"
                        fill="url(#linear-gradient-16)"
                      />
                      <g id="Group_107417" data-name="Group 107417" transform="translate(136.982 46.33)" opacity="0.5">
                        <path
                          id="Path_190098"
                          data-name="Path 190098"
                          d="M422.913,326.765l-.88-.06c.009-.125.792-12.745-4.636-28.77-3.316-9.782-15.325-24.7-15.445-24.849l.687-.557c.122.15,12.229,15.192,15.593,25.123C423.72,313.856,422.921,326.638,422.913,326.765Z"
                          transform="translate(-401.952 -272.53)"
                          fill="url(#linear-gradient-17)"
                        />
                      </g>
                      <path
                        id="Path_190099"
                        data-name="Path 190099"
                        d="M349.81,312.43l.588,2.071s10.774,5.2,18.664,6.777,14.546-6.253,14.546-7.436c0-.979-4,.581-11.887-.495C367.062,312.711,354.6,314.25,349.81,312.43Z"
                        transform="translate(-304.949 -195.607)"
                        opacity="0.5"
                        fill="url(#linear-gradient-18)"
                      />
                      <g id="Group_107418" data-name="Group 107418" transform="translate(44.711 111.569)">
                        <path
                          id="Path_190100"
                          data-name="Path 190100"
                          d="M352.322,311.007l-2.6,3.687s2.949,1.35,6.883,2.9a83.107,83.107,0,0,0,12.8,4.083,14.624,14.624,0,0,0,10.115-1.836c2.59-1.486,4.2-3.316,4.2-3.908,0-.977-3.761-1.113-11.652-2.189a101.783,101.783,0,0,1-15.567-4.09A3.661,3.661,0,0,0,352.322,311.007Z"
                          transform="translate(-349.725 -309.456)"
                          fill="url(#radial-gradient-4)"
                        />
                        <path
                          id="Path_190101"
                          data-name="Path 190101"
                          d="M352.118,310.937A3.7,3.7,0,0,1,356.2,309.8c2.422.822,5.286,1.693,8.024,2.424a65.669,65.669,0,0,0,7.113,1.562c1.645.233,3.109.42,4.39.579,4.555.562,6.823.806,6.95,1.521.1.548-1.281,2.223-3.56,3.585a14.986,14.986,0,0,1-7.926,2.139h0a13.019,13.019,0,0,1-2.166-.247,80.117,80.117,0,0,1-12.164-3.855c-3.673-1.438-6.45-2.7-6.544-2.735-.274-.1,1.214-2.684,1.041-2.758Z"
                          transform="translate(-349.298 -309.347)"
                          fill="url(#radial-gradient-5)"
                        />
                        <path
                          id="Path_190102"
                          data-name="Path 190102"
                          d="M351.954,310.87a3.783,3.783,0,0,1,3.984-.917c2.364.8,5.138,1.641,7.795,2.352a66.43,66.43,0,0,0,6.91,1.53c1.6.233,3.016.421,4.26.576,4.3.534,6.518.77,6.772,1.435.191.5-.956,2.026-2.922,3.261a14.806,14.806,0,0,1-7.908,2.194h0a12.966,12.966,0,0,1-2.166-.244,76.759,76.759,0,0,1-11.526-3.627c-3.412-1.329-6.016-2.5-6.2-2.569-.549-.2.509-2.641.161-2.79Z"
                          transform="translate(-348.912 -309.24)"
                          fill="url(#radial-gradient-6)"
                        />
                        <path
                          id="Path_190103"
                          data-name="Path 190103"
                          d="M351.977,310.8a3.928,3.928,0,0,1,3.885-.7c2.307.774,4.993,1.588,7.569,2.279a67.667,67.667,0,0,0,6.7,1.5q2.316.35,4.127.572c4.041.505,6.21.731,6.6,1.35.283.456-.631,1.827-2.284,2.938a14.655,14.655,0,0,1-7.889,2.247h0a12.741,12.741,0,0,1-2.166-.24,72.925,72.925,0,0,1-10.887-3.4c-3.152-1.212-5.583-2.3-5.866-2.4-.823-.3-.2-2.6-.719-2.821Z"
                          transform="translate(-348.712 -309.133)"
                          fill="url(#radial-gradient-7)"
                        />
                        <path
                          id="Path_190104"
                          data-name="Path 190104"
                          d="M352.14,310.738a4.179,4.179,0,0,1,3.786-.482c2.251.753,4.846,1.539,7.341,2.207,2.4.645,4.7,1.178,6.5,1.466,1.491.235,2.828.424,3.995.572,3.783.474,5.9.694,6.417,1.263.373.41-.306,1.629-1.647,2.615a14.487,14.487,0,0,1-7.871,2.3h0a12.326,12.326,0,0,1-2.166-.237,69.924,69.924,0,0,1-10.249-3.17c-2.89-1.1-5.15-2.1-5.526-2.24-1.1-.4-.9-2.553-1.6-2.852Z"
                          transform="translate(-348.652 -309.028)"
                          fill="url(#radial-gradient-8)"
                        />
                        <path
                          id="Path_190105"
                          data-name="Path 190105"
                          d="M352.3,310.676a4.562,4.562,0,0,1,3.687-.265c2.191.73,4.7,1.486,7.111,2.134,2.311.62,4.535,1.14,6.3,1.435,1.44.235,2.735.424,3.862.569,3.526.445,5.585.659,6.24,1.177.463.367.019,1.431-1.011,2.293a14.322,14.322,0,0,1-7.85,2.353h0a12.264,12.264,0,0,1-2.164-.233,66.609,66.609,0,0,1-9.611-2.942c-2.629-.991-4.715-1.9-5.187-2.074-1.371-.5-1.608-2.51-2.479-2.883Z"
                          transform="translate(-348.593 -308.926)"
                          fill="url(#radial-gradient-9)"
                        />
                        <path
                          id="Path_190106"
                          data-name="Path 190106"
                          d="M352.467,310.619a5.173,5.173,0,0,1,3.588-.048c2.134.707,4.553,1.435,6.885,2.062,2.221.6,4.364,1.1,6.1,1.4,1.387.237,2.64.426,3.73.565,3.268.417,5.27.627,6.062,1.092.551.323.345,1.233-.373,1.97a14.166,14.166,0,0,1-7.832,2.406h0a12.046,12.046,0,0,1-2.164-.23,63.572,63.572,0,0,1-8.975-2.714c-2.366-.88-4.281-1.7-4.846-1.908-1.645-.6-2.313-2.468-3.359-2.915Z"
                          transform="translate(-348.533 -308.828)"
                          fill="url(#radial-gradient-10)"
                        />
                        <path
                          id="Path_190107"
                          data-name="Path 190107"
                          d="M352.629,310.568a6.221,6.221,0,0,1,3.491.171c2.076.684,4.4,1.382,6.655,1.989,2.132.574,4.194,1.064,5.894,1.371,1.336.237,2.546.426,3.6.562a29.727,29.727,0,0,1,5.885,1.007c.64.281.67,1.034.265,1.647a13.99,13.99,0,0,1-7.812,2.459h0a11.684,11.684,0,0,1-2.164-.226,60.548,60.548,0,0,1-8.337-2.486c-2.1-.77-3.846-1.5-4.507-1.742-1.92-.7-3.018-2.426-4.237-2.947Z"
                          transform="translate(-348.472 -308.738)"
                          fill="url(#radial-gradient-11)"
                        />
                        <path
                          id="Path_190108"
                          data-name="Path 190108"
                          d="M352.792,310.534a8.148,8.148,0,0,1,3.392.389c2.019.659,4.258,1.33,6.427,1.915,2.044.551,4.026,1.026,5.691,1.341,1.286.237,2.452.426,3.466.56a40.1,40.1,0,0,1,5.706.919,1.192,1.192,0,0,1,.9,1.325,13.833,13.833,0,0,1-7.795,2.512h0a11.652,11.652,0,0,1-2.164-.223,57.838,57.838,0,0,1-7.7-2.256c-1.843-.663-3.413-1.307-4.168-1.579-2.194-.793-3.723-2.382-5.117-2.977Z"
                          transform="translate(-348.412 -308.664)"
                          fill="url(#radial-gradient-12)"
                        />
                        <path
                          id="Path_190109"
                          data-name="Path 190109"
                          d="M352.955,310.538a12.488,12.488,0,0,1,3.293.6c1.963.638,4.113,1.281,6.2,1.844,1.954.528,3.855.988,5.487,1.307,1.233.239,2.357.428,3.332.558,2.5.329,4.33.537,5.53.834a2.455,2.455,0,0,1,1.539,1,13.65,13.65,0,0,1-7.774,2.565h0a11.47,11.47,0,0,1-2.164-.219,55.546,55.546,0,0,1-7.06-2.028c-1.579-.553-2.98-1.106-3.827-1.413-2.47-.894-4.429-2.339-6-3.009Z"
                          transform="translate(-348.353 -308.627)"
                          fill="url(#radial-gradient-13)"
                        />
                        <path
                          id="Path_190110"
                          data-name="Path 190110"
                          d="M353.119,310.56a28.7,28.7,0,0,1,3.194.823c1.9.615,3.965,1.228,5.971,1.772,1.866.505,3.685.95,5.284,1.276,1.182.24,2.263.429,3.2.555,2.24.3,4.016.509,5.351.747a9.248,9.248,0,0,1,2.177.68,13.511,13.511,0,0,1-7.756,2.62h0a11.41,11.41,0,0,1-2.162-.217,53.528,53.528,0,0,1-6.422-1.8c-1.316-.447-2.546-.906-3.488-1.247-2.744-.993-5.136-2.3-6.878-3.041Z"
                          transform="translate(-348.293 -308.61)"
                          fill="url(#radial-gradient-14)"
                        />
                        <path
                          id="Path_190111"
                          data-name="Path 190111"
                          d="M370.524,318.811a11.074,11.074,0,0,1-2.162-.214,66.033,66.033,0,0,1-8.933-2.655c-3.019-1.092-5.841-2.253-7.758-3.071l1.611-2.288c2.6.922,5.779,1.91,8.839,2.74a69.947,69.947,0,0,0,8.15,1.795c1.982.27,3.7.482,5.175.663,1,.122,1.97.242,2.814.357a13.345,13.345,0,0,1-7.737,2.673Z"
                          transform="translate(-348.233 -308.592)"
                          fill="url(#radial-gradient-15)"
                        />
                      </g>
                      <path
                        id="Path_190112"
                        data-name="Path 190112"
                        d="M327.152,303.876l9.341,4.772,1.553-.917-9.081-11.8A49.583,49.583,0,0,0,327.152,303.876Z"
                        transform="translate(-322.322 -208.255)"
                        opacity="0.5"
                        fill="url(#linear-gradient-18)"
                      />
                      <g id="Group_107419" data-name="Group 107419" transform="translate(4.83 85.845)">
                        <path
                          id="Path_190113"
                          data-name="Path 190113"
                          d="M327.152,302.837l10.885,5.821-.618-6.178a3.772,3.772,0,0,0-1.574-2.707l-6.88-4.878A49.583,49.583,0,0,0,327.152,302.837Z"
                          transform="translate(-327.152 -294.896)"
                          fill="url(#radial-gradient-16)"
                        />
                        <path
                          id="Path_190114"
                          data-name="Path 190114"
                          d="M328.911,295.041l6.668,4.717a3.849,3.849,0,0,1,1.588,2.569l.587,5.858-10.547-5.65A48.158,48.158,0,0,1,328.911,295.041Z"
                          transform="translate(-327.111 -294.785)"
                          fill="url(#radial-gradient-17)"
                        />
                        <path
                          id="Path_190115"
                          data-name="Path 190115"
                          d="M328.857,295.187l6.456,4.556a3.958,3.958,0,0,1,1.6,2.429l.553,5.537-10.208-5.477A46.517,46.517,0,0,1,328.857,295.187Z"
                          transform="translate(-327.069 -294.673)"
                          fill="url(#radial-gradient-18)"
                        />
                        <path
                          id="Path_190116"
                          data-name="Path 190116"
                          d="M328.8,295.332l6.242,4.4a4.125,4.125,0,0,1,1.618,2.291l.521,5.217-9.869-5.306A45.056,45.056,0,0,1,328.8,295.332Z"
                          transform="translate(-327.027 -294.562)"
                          fill="url(#radial-gradient-19)"
                        />
                        <path
                          id="Path_190117"
                          data-name="Path 190117"
                          d="M328.749,295.477l6.03,4.235a4.365,4.365,0,0,1,1.631,2.154l.489,4.9-9.53-5.134A43.936,43.936,0,0,1,328.749,295.477Z"
                          transform="translate(-326.986 -294.451)"
                          fill="url(#radial-gradient-20)"
                        />
                        <path
                          id="Path_190118"
                          data-name="Path 190118"
                          d="M328.7,295.622l5.816,4.076c.486.345,1.587,1.422,1.645,2.016l.458,4.576-9.192-4.963A42.7,42.7,0,0,1,328.7,295.622Z"
                          transform="translate(-326.944 -294.339)"
                          fill="url(#radial-gradient-21)"
                        />
                        <path
                          id="Path_190119"
                          data-name="Path 190119"
                          d="M328.642,295.767l5.6,3.915c.406.288,1.611,1.383,1.661,1.878l.426,4.254-8.853-4.79A41.755,41.755,0,0,1,328.642,295.767Z"
                          transform="translate(-326.902 -294.228)"
                          fill="url(#radial-gradient-22)"
                        />
                        <path
                          id="Path_190120"
                          data-name="Path 190120"
                          d="M328.589,295.912l5.39,3.754c.325.23,1.634,1.344,1.675,1.74l.392,3.935-8.514-4.618A41.193,41.193,0,0,1,328.589,295.912Z"
                          transform="translate(-326.861 -294.117)"
                          fill="url(#radial-gradient-23)"
                        />
                        <path
                          id="Path_190121"
                          data-name="Path 190121"
                          d="M328.535,296.058l5.178,3.594c.242.171,1.659,1.3,1.689,1.6l.36,3.615-8.176-4.449A41.393,41.393,0,0,1,328.535,296.058Z"
                          transform="translate(-326.819 -294.005)"
                          fill="url(#radial-gradient-24)"
                        />
                        <path
                          id="Path_190122"
                          data-name="Path 190122"
                          d="M328.48,296.2l4.965,3.433a10.781,10.781,0,0,1,1.7,1.463l.33,3.293-7.837-4.276C327.888,298.666,328.175,297.327,328.48,296.2Z"
                          transform="translate(-326.777 -293.894)"
                          fill="url(#radial-gradient-25)"
                        />
                        <path
                          id="Path_190123"
                          data-name="Path 190123"
                          d="M328.426,296.348l4.753,3.272a20.92,20.92,0,0,1,1.717,1.325l.3,2.973-7.5-4.1C327.916,298.553,328.163,297.374,328.426,296.348Z"
                          transform="translate(-326.736 -293.783)"
                          fill="url(#radial-gradient-26)"
                        />
                        <path
                          id="Path_190124"
                          data-name="Path 190124"
                          d="M327.75,299.512c.193-1.074.4-2.088.622-3.019l6.272,4.3.265,2.652Z"
                          transform="translate(-326.694 -293.671)"
                          fill="url(#radial-gradient-27)"
                        />
                      </g>
                      <path
                        id="Path_190125"
                        data-name="Path 190125"
                        d="M354.307,324.645c10.44,6.41,27.222,11.441,38.663,11.835S506.591,277.3,506.591,277.3s-77.327,40.241-94.685,47.343-36.69,3.945-52.076-4.339a140.624,140.624,0,0,1-26.418-18.955A19.552,19.552,0,0,0,328.8,306.1c-.032.048-.064.11-.094.161A236.293,236.293,0,0,0,354.307,324.645Z"
                        transform="translate(-321.133 -222.541)"
                        opacity="0.5"
                        fill="url(#linear-gradient-20)"
                      />
                      <path
                        id="Path_190126"
                        data-name="Path 190126"
                        d="M338.378,304v10.257l13.019,7.3v-9.666Z"
                        transform="translate(-313.714 -202.074)"
                        fill="url(#linear-gradient-21)"
                        style={{ mixBlendMode: 'multiply', isolation: 'isolate' }}
                      />
                      <path
                        id="Path_190127"
                        data-name="Path 190127"
                        d="M338.194,303.676v10.258l13.019,7.3v-9.666Z"
                        transform="translate(-313.855 -202.32)"
                        fill="url(#linear-gradient-21)"
                      />
                      <path
                        id="Path_190128"
                        data-name="Path 190128"
                        d="M333.991,300.878l2.546,2.088A83.729,83.729,0,0,0,360.7,316.8h0Z"
                        transform="translate(-317.078 -204.465)"
                        fill="url(#linear-gradient-18)"
                      />
                      <g id="Group_107420" data-name="Group 107420" transform="translate(11.049 97.646)">
                        <path
                          id="Path_190129"
                          data-name="Path 190129"
                          d="M363.781,330.012a9.555,9.555,0,0,1-4.535-1.15l-22.475-12.1a9.575,9.575,0,0,1-4.922-7.026l-1.177-8.037.875-.127,1.175,8.037a8.7,8.7,0,0,0,4.466,6.376l22.475,12.1a8.632,8.632,0,0,0,10.977-2.353l1.355-1.765.7.539-1.357,1.765A9.508,9.508,0,0,1,363.781,330.012Z"
                          transform="translate(-330.672 -301.576)"
                          fill="url(#linear-gradient-17)"
                        />
                      </g>
                      <path
                        id="Path_190130"
                        data-name="Path 190130"
                        d="M328.94,315.548c8.261,6.947,36.149,20.878,50.391,25.4l-2.323-4.648a10.218,10.218,0,0,0-4.991-4.77l-4-1.776a253.042,253.042,0,0,1-27.632-14.379l-5.532-3.325a3.211,3.211,0,0,0-4.376,1.044Z"
                        transform="translate(-320.951 -196.25)"
                        fill="url(#linear-gradient-25)"
                      />
                      <g id="Group_107421" data-name="Group 107421" transform="translate(104.015 46.625)" opacity="0.5">
                        <path
                          id="Path_190131"
                          data-name="Path 190131"
                          d="M407.558,343.646l-.152-.537A147.75,147.75,0,0,0,397.931,319c-3.98-7.638-14.533-14.97-14.639-15.042l.5-.728c.442.3,10.842,7.532,14.922,15.364a147.636,147.636,0,0,1,9.387,23.741l66.735-37.354c.465-1.21,3.638-9.629,4.152-15.547.551-6.348-1.942-16.417-1.965-16.519l.855-.214c.106.419,2.553,10.314,1.989,16.809s-4.115,15.558-4.267,15.94l-.057.147-.138.076Z"
                          transform="translate(-383.292 -272.697)"
                          fill="url(#linear-gradient-17)"
                        />
                      </g>
                      <path
                        id="Path_190132"
                        data-name="Path 190132"
                        d="M391.225,310.527c-3.9,0-6.367-.823-7.774-2.588a5.9,5.9,0,0,1-.917-5.217c1.846-8.116,35.04-36.241,63.564-36.241q.8,0,1.585.028c21.245.811,31.222,10.922,31.222,10.922s-40.239,23.616-64.723,29.308c-11.422,2.654-18.287,3.788-22.955,3.788Z"
                        transform="translate(-280.025 -230.839)"
                        fill="url(#linear-gradient)"
                        style={{ mixBlendMode: 'screen', isolation: 'isolate' }}
                      />
                      <path
                        id="Path_190133"
                        data-name="Path 190133"
                        d="M476.864,275.941s-9.484-7.362-30.247-8.154c-27.616-1.051-61.283,27.517-62.86,34.455s8.48,6.069,28.932,1.314C437.149,297.87,476.864,275.941,476.864,275.941Z"
                        transform="translate(-279.044 -229.858)"
                        fill="url(#linear-gradient-13)"
                      />
                      <path
                        id="Path_190134"
                        data-name="Path 190134"
                        d="M397.458,328.455l65.883-37.084S415.6,313.464,408.9,317.409,397.458,328.455,397.458,328.455Z"
                        transform="translate(-268.415 -211.754)"
                        opacity="0.5"
                        fill="url(#linear-gradient-29)"
                      />
                      <g id="Group_107422" data-name="Group 107422" transform="translate(112.195 39.595)">
                        <path
                          id="Path_190135"
                          data-name="Path 190135"
                          d="M415.868,291.247c.59,1.039,1.118,2.009,1.622,2.947,16.726-6.742,33.888-15.685,40.248-19.084-3.9-2.1-12.713-5.823-26.923-6.366-.475-.018-.956-.027-1.435-.027-8.247,0-16.945,2.585-25.075,6.33A87.775,87.775,0,0,1,415.868,291.247Z"
                          transform="translate(-375.361 -268.718)"
                          fill="url(#linear-gradient-30)"
                        />
                        <path
                          id="Path_190136"
                          data-name="Path 190136"
                          d="M420.944,285.591a130.7,130.7,0,0,0-7.182-12.443,111.525,111.525,0,0,0-25.84,18.088,41.473,41.473,0,0,0,3.479,9.936,167.5,167.5,0,0,0,17.727-3.4,124.822,124.822,0,0,0,14.381-4.45A30.886,30.886,0,0,0,420.944,285.591Z"
                          transform="translate(-387.922 -265.321)"
                          fill="url(#linear-gradient-31)"
                        />
                      </g>
                      <path
                        id="Path_190137"
                        data-name="Path 190137"
                        d="M436.987,283.178s28.337-10.92,33.043-13.463,5.366-2.636,5.272-10.733c0,0,.565,4.519-8.1,9.509S436.987,283.178,436.987,283.178Z"
                        transform="translate(-238.107 -236.587)"
                        opacity="0.5"
                        fill="url(#linear-gradient-18)"
                      />
                      <path
                        id="Path_190138"
                        data-name="Path 190138"
                        d="M455.424,269.6s13.445,5.182,12.394-.341-6.7-10.486-6.7-10.486S462.3,267.809,455.424,269.6Z"
                        transform="translate(-223.97 -236.751)"
                        fill="url(#linear-gradient-33)"
                      />
                      <path
                        id="Path_190139"
                        data-name="Path 190139"
                        d="M456.916,268.549s9.313,3.062,8.426-1.6a11.8,11.8,0,0,0-4.378-7.062S463.577,267.885,456.916,268.549Z"
                        transform="translate(-222.827 -235.893)"
                        fill="url(#linear-gradient-34)"
                      />
                      <path
                        id="Path_190140"
                        data-name="Path 190140"
                        d="M455.264,269.408s4.406,1.18,8.012,1.894a16.029,16.029,0,0,0,.931-4.765c-.141-2.823-2.966-7.767-2.966-7.767S463.154,268.62,455.264,269.408Z"
                        transform="translate(-224.093 -236.751)"
                        fill="url(#linear-gradient-35)"
                        style={{ mixBlendMode: 'multiply', isolation: 'isolate' }}
                      />
                      <g
                        id="Group_107423"
                        data-name="Group 107423"
                        transform="translate(38.319 51.012)"
                        style={{ mixBlendMode: 'screen', isolation: 'isolate' }}
                      >
                        <path
                          id="Path_190141"
                          data-name="Path 190141"
                          d="M358.184,275.334c-2.184.35-5.782,2.7-9.434,5.825a142.031,142.031,0,0,0-2.639,25.791,71.074,71.074,0,0,0,23.6,9.947,412.748,412.748,0,0,1-6.456-41.509,23.308,23.308,0,0,0-2.947-.207A13.561,13.561,0,0,0,358.184,275.334Z"
                          transform="translate(-346.107 -275.18)"
                          fill="url(#linear-gradient-36)"
                        />
                        <path
                          id="Path_190142"
                          data-name="Path 190142"
                          d="M380.1,315.063a392.667,392.667,0,0,1-16.712-38.01,46.881,46.881,0,0,0-7.4-1.731,227.962,227.962,0,0,0,12.606,42.211c.239.005.477.014.714.014a23.579,23.579,0,0,0,4.224-.357A25.737,25.737,0,0,0,380.1,315.063Z"
                          transform="translate(-338.531 -275.071)"
                          fill="url(#linear-gradient-37)"
                        />
                      </g>
                      <g
                        id="Group_107424"
                        data-name="Group 107424"
                        transform="translate(86.217 43.487)"
                        style={{ mixBlendMode: 'screen', isolation: 'isolate' }}
                      >
                        <path
                          id="Path_190143"
                          data-name="Path 190143"
                          d="M464.329,270.921a17.089,17.089,0,0,0-8.525,2.521c-9.092,5.251-16.215,17.544-16.215,27.987a18.849,18.849,0,0,0,.889,5.924l1.466-.777c-.133-3.245-.2-4.171-.2-5.147,0-9.745,6.65-21.22,15.139-26.123a14.982,14.982,0,0,1,7.449-2.233c6.076,0,10.01,4.753,10.056,12.115.615-.774,1.288-1.657,1.97-2.618C475.327,274.559,469.813,270.921,464.329,270.921Z"
                          transform="translate(-322.329 -270.921)"
                          fill="url(#linear-gradient-38)"
                        />
                        <path
                          id="Path_190144"
                          data-name="Path 190144"
                          d="M397.959,308.207a17.089,17.089,0,0,0-8.524,2.521c-9.093,5.251-16.217,17.544-16.217,27.987,0,.134.014.258.016.389,1.042-.537,1.8-.963,2.17-1.177.343-9.57,6.844-20.565,15.107-25.335a14.986,14.986,0,0,1,7.449-2.235c5.562,0,9.321,3.989,9.954,12.676l2.228-1.182C409.835,312.444,403.88,308.207,397.959,308.207Z"
                          transform="translate(-373.218 -242.332)"
                          fill="url(#linear-gradient-39)"
                        />
                      </g>
                      <path
                        id="Path_190145"
                        data-name="Path 190145"
                        d="M440,272.746s-2.825,5.224-2.542,9.32-1.977,4.8-3.671,4.237S433.077,270.911,440,272.746Z"
                        transform="translate(-241.117 -226.155)"
                        fill="url(#linear-gradient-40)"
                        style={{ mixBlendMode: 'multiply', isolation: 'isolate' }}
                      />
                      <path
                        id="Path_190146"
                        data-name="Path 190146"
                        d="M441.635,274.084s-5.549-3.332-8.443-3.332-2.367,11.835.79,12.1,2.1-5.26,3.682-6.574A15.734,15.734,0,0,1,441.635,274.084Z"
                        transform="translate(-242.474 -227.563)"
                        fill="url(#radial-gradient-28)"
                      />
                      <ellipse
                        id="Ellipse_2608"
                        data-name="Ellipse 2608"
                        cx="1.8"
                        cy="4.13"
                        rx="1.8"
                        ry="4.13"
                        transform="translate(189.136 43.555)"
                        fill="url(#linear-gradient-41)"
                        style={{ mixBlendMode: 'screen', isolation: 'isolate' }}
                      />
                      <path
                        id="Path_190147"
                        data-name="Path 190147"
                        d="M400.441,251.183c-1.385,0-2.7.005-3.924.014a80.132,80.132,0,0,1,15.1,6.438c2.115,1.207,4.053,2.385,5.841,3.511a92.568,92.568,0,0,1,3.657-9.463C414.253,251.066,406.946,251.183,400.441,251.183Z"
                        transform="translate(-269.137 -242.575)"
                        fill="url(#linear-gradient-42)"
                        style={{ mixBlendMode: 'screen', isolation: 'isolate' }}
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g id="otonom_sensor" className="jss56">
                <defs>
                  <linearGradient id="linear-gradient-icon" y1="0.5" x2={1} y2="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0.035" stopColor="#138bbd" />
                    <stop offset="0.226" stopColor="#169ac6" />
                    <stop offset="0.595" stopColor="#1ec2df" />
                    <stop offset={1} stopColor="#2af6ff" />
                  </linearGradient>
                  <radialGradient
                    id="radial-gradient-icon"
                    cx="0.7"
                    cy="0.429"
                    r="1.368"
                    gradientTransform="translate(-0.029) scale(1.058 1)"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset={0} stopColor="#fff" />
                    <stop offset={1} />
                  </radialGradient>
                </defs>
                <rect
                  id="Rectangle_39842"
                  data-name="Rectangle 39842"
                  width={745}
                  height={480}
                  transform="translate(606 133)"
                  fill="#fff"
                  opacity={0}
                />
                <g id="Group_107966" data-name="Group 107966">
                  <g id="Group_107428_1" data-name="Group 107428" transform="translate(296.122 26.579)">
                    <g id="Group_107881" data-name="Group 107881" transform="translate(578.607 246.647)">
                      <g id="Group_107376" data-name="Group 107376">
                        <g
                          id="Group_107375"
                          data-name="Group 107375"
                          style={{ mixBlendMode: 'color-dodge', isolation: 'isolate' }}
                        >
                          <path
                            id="Path_189980"
                            data-name="Path 189980"
                            d="M535.058,239.783a2.191,2.191,0,0,1-1.1-.322L479.1,207.789a5.3,5.3,0,0,1-2.269-4.277v-62.52c0-1.631.921-2.36,1.83-2.36a2.191,2.191,0,0,1,1.1.322l54.859,31.672a5.3,5.3,0,0,1,2.268,4.277v62.52C536.888,239.053,535.97,239.783,535.058,239.783Zm-56.4-99.827c-.348,0-.505.519-.505,1.035v62.52a3.985,3.985,0,0,0,1.606,3.131l54.859,31.672a.924.924,0,0,0,.438.143c.348,0,.505-.519.505-1.035V174.9a3.985,3.985,0,0,0-1.606-3.131L479.1,140.1A.924.924,0,0,0,478.66,139.956Z"
                            transform="translate(-476.83 -138.631)"
                            fill="url(#linear-gradient-icon)"
                          />
                        </g>
                        <path
                          id="Path_189981"
                          data-name="Path 189981"
                          d="M534.479,237.87a.918.918,0,0,1-.435-.143l-54.857-31.672a3.969,3.969,0,0,1-1.6-3.122v-62.52c0-.511.154-1.026.5-1.026a.913.913,0,0,1,.433.143L533.373,171.2a3.969,3.969,0,0,1,1.6,3.122v62.52C534.976,237.354,534.822,237.87,534.479,237.87Z"
                          transform="translate(-476.251 -138.052)"
                          fill="#4b61b8"
                          opacity="0.3"
                        />
                        <g id="Group_107882" data-name="Group 107882" transform="translate(10.977 22.586)">
                          <g id="Group_107863" data-name="Group 107863" transform="translate(4.49 38.799)">
                            <path
                              id="Path_191901"
                              data-name="Path 191901"
                              d="M376.029,175.011l1.551.9.692,6.079.019.01.692-5.279,1.551.9v7.934l-1.028-.593v-6.007l-.019-.011-.79,5.55-.909-.524L377,177.5l-.02-.012v6.007l-.949-.548Z"
                              transform="translate(-376.029 -175.011)"
                              fill="#fff"
                            />
                            <path
                              id="Path_191902"
                              data-name="Path 191902"
                              d="M381.7,178.287l1.086.627v7.935l-1.086-.628Z"
                              transform="translate(-376.389 -175.219)"
                              fill="#fff"
                            />
                            <path
                              id="Path_191903"
                              data-name="Path 191903"
                              d="M383.729,179.456l1.363.788,1.057,5.359.02.011v-4.749l.967.559v7.933l-1.116-.643-1.3-6.544-.021-.012v5.791l-.967-.558Z"
                              transform="translate(-376.518 -175.293)"
                              fill="#fff"
                            />
                            <path
                              id="Path_191904"
                              data-name="Path 191904"
                              d="M390.4,191.409a3.018,3.018,0,0,1-.351-1.541v-5.6q0-.941.351-1.135t1.17.279l.336.194v1.02l-.267-.154q-.267-.155-.385-.069c-.079.056-.119.22-.119.492v5.6a1.363,1.363,0,0,0,.119.63.97.97,0,0,0,.385.375l.267.155v1.02l-.336-.194A3.094,3.094,0,0,1,390.4,191.409Z"
                              transform="translate(-376.92 -175.524)"
                              fill="#fff"
                            />
                            <path
                              id="Path_191905"
                              data-name="Path 191905"
                              d="M392.83,184.712l1.086.626v3.344l1.383-2.545,1.087.627-1.294,2.165,1.313,5.78-1.135-.656-.92-4.067-.435.758v2.528l-1.086-.626Z"
                              transform="translate(-377.096 -175.627)"
                              fill="#fff"
                            />
                            <path
                              id="Path_191906"
                              data-name="Path 191906"
                              d="M397.2,187.232l1.55.9.692,6.078.02.01.691-5.279,1.551.9v7.934l-1.027-.594v-6.007l-.02-.011-.789,5.55-.909-.524-.79-6.463-.02-.012v6.007l-.948-.548Z"
                              transform="translate(-377.374 -175.787)"
                              fill="#fff"
                            />
                            <path
                              id="Path_191907"
                              data-name="Path 191907"
                              d="M402.807,197.914l.267.154q.267.155.385.069c.08-.056.119-.221.119-.493v-5.6a1.352,1.352,0,0,0-.119-.63.958.958,0,0,0-.385-.375l-.267-.155v-1.02l.336.194a3.1,3.1,0,0,1,1.171,1.072,3.026,3.026,0,0,1,.35,1.54v5.6q0,.941-.35,1.135t-1.171-.279l-.336-.194Z"
                              transform="translate(-377.73 -175.955)"
                              fill="#fff"
                            />
                          </g>
                          <path
                            id="Path_191908"
                            data-name="Path 191908"
                            d="M403.922,180.76a1.807,1.807,0,0,1-.6-.6c-.373-.594-.408-1.267-.079-1.5,2.789-2.012,4.324-5.781,4.324-10.61,0-10.926-7.746-24.287-17.268-29.784s-17.267-1.081-17.267,9.845a34.272,34.272,0,0,0,4.324,15.6c.329.618.294,1.251-.08,1.414s-.941-.206-1.272-.825a37.857,37.857,0,0,1-4.774-17.232c0-12.065,8.555-16.943,19.068-10.872s19.069,20.825,19.069,32.891c0,5.335-1.7,9.5-4.775,11.719A.617.617,0,0,1,403.922,180.76Z"
                            transform="translate(-371.234 -133.58)"
                            fill="#43e8e1"
                          />
                          <path
                            id="Path_191909"
                            data-name="Path 191909"
                            d="M376.683,165.034a1.88,1.88,0,0,1-.675-.739,37.857,37.857,0,0,1-4.774-17.232c0-12.065,8.555-16.943,19.068-10.872a35.94,35.94,0,0,1,10.375,9.51c.418.552.536,1.26.265,1.583s-.83.136-1.246-.417a32.561,32.561,0,0,0-9.394-8.608c-9.521-5.5-17.267-1.081-17.267,9.845a34.272,34.272,0,0,0,4.324,15.6c.329.618.294,1.251-.08,1.414A.673.673,0,0,1,376.683,165.034Z"
                            transform="translate(-371.234 -133.58)"
                            fill="url(#radial-gradient-icon)"
                          />
                          <g id="Group_107864" data-name="Group 107864" transform="translate(10.742 10.926)">
                            <path
                              id="Path_191910"
                              data-name="Path 191910"
                              d="M383.684,162.5a8.285,8.285,0,0,1-.979-4.055V156.9l2.453,1.416V160a2.8,2.8,0,0,0,1.344,2.643c.439.254.774.288,1,.1s.342-.673.342-1.467v-1.542a4.611,4.611,0,0,0-.4-2.085,3.191,3.191,0,0,0-1.3-1.3l-.871-.5v-2.705l.943.544q.777.45,1.167.214t.389-1.318V151.2a3.446,3.446,0,0,0-.353-1.637,2.462,2.462,0,0,0-.943-1q-1.25-.722-1.25,1.037v1.245l-2.452-1.415v-1q0-2.273.978-2.926t2.819.409a7.307,7.307,0,0,1,2.829,2.838,8.25,8.25,0,0,1,.966,4.035v.676a4.157,4.157,0,0,1-.447,2.217,1.3,1.3,0,0,1-1.392.537v.054a6.151,6.151,0,0,1,1.462,2.251,8,8,0,0,1,.448,2.748v1.677q0,2.273-.978,2.912t-2.888-.464A7.444,7.444,0,0,1,383.684,162.5Z"
                              transform="translate(-382.705 -145.248)"
                              fill="#fff"
                            />
                            <path
                              id="Path_191911"
                              data-name="Path 191911"
                              d="M393.894,168.312a8.361,8.361,0,0,1-.992-4.1v-1.487l2.453,1.416v1.7a2.776,2.776,0,0,0,1.345,2.616q1.344.775,1.344-1.065v-4.248A2.8,2.8,0,0,0,396.7,160.5q-1.344-.777-1.345,1.091v.162L392.9,160.34l.473-10.307,6.838,3.948v2.705l-4.528-2.614-.213,4.4.048.027q.729-.958,2.239-.087a5.26,5.26,0,0,1,2.146,2.349,8.4,8.4,0,0,1,.73,3.641v4.276q0,2.3-.99,2.959t-2.877-.43A7.438,7.438,0,0,1,393.894,168.312Z"
                              transform="translate(-383.353 -145.552)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Group_107943" data-name="Group 107943">
                    <path
                      className="jss61"
                      id="Path_190148"
                      data-name="Path 190148"
                      d="M451.639,232.856c-.613,0-1.207.044-1.818.049l.035,6.4c.611-.007,1.2-.051,1.818-.049,45.824.081,83.215,21.671,83.358,48.128,0,.073-.018.143-.018.214l11.081.021c0-.072.018-.143.018-.216C545.951,257.421,503.565,232.95,451.639,232.856Z"
                      transform="translate(498.54 126.911)"
                      fill="#1ad971"
                      opacity="0.3"
                    />
                    <path
                      id="Path_190149"
                      data-name="Path 190149"
                      d="M451.718,247.339c-.624,0-1.2.092-1.818.1l.035,6.4c.615-.016,1.194-.1,1.816-.1,21.381.039,38.835,10.115,38.9,22.459,0,.076-.035.143-.037.216l11.079.019c0-.072.037-.14.037-.215C501.648,260.342,479.212,247.388,451.718,247.339Z"
                      transform="translate(498.6 138.015)"
                      fill="#1ad971"
                      opacity="0.9"
                    />
                    <path
                      className="jss59"
                      id="Path_190150"
                      data-name="Path 190150"
                      d="M451.677,240.1c-.613,0-1.207.042-1.816.051l.034,6.4c.609-.009,1.2-.049,1.818-.049,33.6.062,61.025,15.9,61.131,35.294,0,.072-.018.143-.018.216l11.079.019c0-.072.018-.141.018-.216C523.8,258.881,491.388,240.169,451.677,240.1Z"
                      transform="translate(498.57 132.462)"
                      fill="#1ad971"
                      opacity="0.6"
                    />
                  </g>
                </g>
              </g>
              <g id="otonom_detections" className="jss78">
                <rect
                  id="Rectangle_39842"
                  data-name="Rectangle 39842"
                  width={745}
                  height={480}
                  transform="translate(606 133)"
                  fill="#fff"
                  opacity={0}
                />
                <g id="Group_107966" data-name="Group 107966" className="jss80">
                  <g
                    id="Group_107940"
                    data-name="Group 107940"
                    transform="translate(544.188 163.464)"
                    style={{ '--t': 'translate(544.188px, 163.464px)' }}
                  >
                    <g id="Group_28" data-name="Group 28" transform="translate(577.286 255.499)">
                      <path
                        id="Path_92"
                        data-name="Path 92"
                        d="M285,522.623c-8.769,3.158-6.766,8.205-11.834,5.8a6.289,6.289,0,0,0-6.279,1.262c-6.4,5.1,6.8,8.785,6.82,10.233.028,1.653,3.449.725,4.194,1.965s8.548,4.135,9.587,1.446a11.711,11.711,0,0,1,6.659-6.408c3.182-1.241,2.688,0,4.264-1.448s5.962.717.374-4.5,7.163-5.767,1.651-6.874-3.435-.693-8.125-.62C288.383,520.747,289.421,521.58,285,522.623Z"
                        transform="translate(-265.135 -521.636)"
                        fill="#eaebeb"
                        stroke="#cccfd4"
                        strokeMiterlimit="22.926"
                        strokeWidth="0.216"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_93"
                        data-name="Path 93"
                        d="M267.308,536.2c1.5.816,6.636,3.929,6.644,4.363.028,1.653,3.449.724,4.194,1.965s8.548,4.135,9.587,1.446a11.711,11.711,0,0,1,6.659-6.408c3.182-1.241,2.688,0,4.264-1.448s5.962.717.374-4.5c-1.693-1.579-1.7-2.73-1.046-3.6-9.434-.877-17.657-1.927-18.049,3.983-.005.09-.009.18-.012.273,0,.14,0,.286,0,.435a9.566,9.566,0,0,0,.118,1.181c.332,2.087-3.215,1.506-5.1,1.912S268.436,534.783,267.308,536.2Z"
                        transform="translate(-265.379 -522.275)"
                        fill="#cccfd4"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_94"
                        data-name="Path 94"
                        d="M293.287,535.03l.419.252c-.01.132-.038.167-.349.36-.03.012-2.267,1.164-.748-.581l.677-.031ZM285.207,534c.793.195.543.032.877.3-.447.233-.153.065-.842.58-.862.038-.578.182-.979-.206.328-.52.077-.229.944-.672Zm.351,3.376.535-.421.165.584-.523.407-.178-.571Zm2.99,2.825.424.566-.2.368c-.473-.084-.194.011-.7-.484-.115-.534-.109-.523-.138-.64l.616.191Zm-.616-.191-.05-.207-.01.187.06.02Zm-4.241,2.473.874.2-.966.2-.874-.2.966-.2Zm-4.3-3.573c.2-.4.712-.336,1.051-.306-.131.634.015.3-.568.971-.794.266-.456.244-1.026.188.23-.485.443-.558.542-.853Zm-5.425-1.883c.465.621.34.337.5.773-.391-.133-.1-.075-.947.132l-.61-.393,0-.41c.558-.23.2-.128,1.058-.1Zm12.9-6.663c.011.1.016.194.022.276-.084,0-.183,0-.3-.011-.5-.144-.673-.1-.46-.763.588-.144.562.03.735.5Zm.022.276c.019.245.054.4.358.417.015-.368-.1-.408-.358-.417Zm6.89-1.155c.283.6.236.3.232.871-.521-.074-.563-.256-.82-.285-.327-.078-.3-.562-.289-.856.595.006.288-.053.877.27Zm5.405,3.754.436.327-.6.43-.422-.32.582-.436Zm-5.476,2.042.073.044.211-.09c.14-.268.062-.46-.238-.315A2.091,2.091,0,0,0,293.706,535.282Z"
                        transform="translate(-266.007 -522.486)"
                        fill="#8c8f94"
                        fillRule="evenodd"
                      />
                    </g>
                    <g id="Group_104703" data-name="Group 104703" transform="translate(573.956 251.063)">
                      <path
                        className="jss82"
                        id="Path_56775"
                        data-name="Path 56775"
                        d="M307.873,523.158V517.6m-39.533,31.676h-5.247m0-5.555v5.555m4.714-31.676h-5.247m0,5.555V517.6m40.6,31.676h5.247m0-5.555v5.555M302.626,517.6h5.248"
                        transform="translate(-262.561 -517.603)"
                        fill="none"
                        stroke="#fb0e0e"
                        strokeWidth={2}
                        fillRule="evenodd"
                        style={{ '--t': 'translate(-262.561px, -517.603px)' }}
                      />
                    </g>
                  </g>
                  <g id="Group_107948" data-name="Group 107948" style={{ '--t': 'translate(0px, 0px)' }}>
                    <g id="Group_107942" data-name="Group 107942" transform="translate(856.144 137.526)">
                      <path
                        id="Path_56775-2"
                        data-name="Path 56775"
                        className="jss82"
                        d="M294.873,523.158V517.6m-26.533,31.676h-5.247m0-5.555v5.555m4.714-31.676h-5.247m0,5.555V517.6m27.6,31.676h5.247m0-5.555v5.555M289.626,517.6h5.248"
                        transform="translate(-260.561 -519.603)"
                        fill="none"
                        stroke="#fb0e0e"
                        strokeWidth={2}
                        fillRule="evenodd"
                        style={{ '--t': 'translate(-260.561px, -519.603px)' }}
                      />
                    </g>
                    <g
                      id="Group_107947"
                      data-name="Group 107947"
                      transform="translate(-1581.969 -293.382)"
                      style={{ mixBlendMode: 'luminosity', isolation: 'isolate' }}
                    >
                      <path
                        id="Path_97"
                        data-name="Path 97"
                        d="M287.587,374.849c-2.051,0-3.893,1.845-3.893,7.163s-.419,9.585,2.843,9.585Z"
                        transform="translate(2144.731 87.32)"
                        fill="#3c3f44"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_98"
                        data-name="Path 98"
                        d="M285.9,375.1c-2.051,0-3.893,1.847-3.893,7.164s-.419,9.585,2.843,9.585Z"
                        transform="translate(2143.718 87.473)"
                        fill="#fff"
                        fillRule="evenodd"
                        opacity="0.6"
                      />
                      <rect
                        id="Rectangle_10"
                        data-name="Rectangle 10"
                        width="26.469"
                        height="44.024"
                        rx="4.052"
                        transform="translate(2431.267 457.337)"
                        fill="#81848b"
                      />
                      <rect
                        id="Rectangle_11"
                        data-name="Rectangle 11"
                        width="26.469"
                        height="44.024"
                        rx="4.052"
                        transform="translate(2431.267 457.337)"
                        fill="#8e9298"
                        opacity="0.1"
                      />
                      <path
                        id="Path_99"
                        data-name="Path 99"
                        d="M290.86,398.144c1.963-4.576,4.984-11.553,4.984-11.553l1.3,2.932s3.629-3.175,3.861-7.166c.436-7.51-4.9-8.405-4.9-8.405-2.435.27-4.856.572-6.881,6.01-1.548,4.149-4.491,14.068-5.8,18.53a3.366,3.366,0,0,0,1.274,3.687Z"
                        transform="translate(2144.497 86.783)"
                        fill="#fbdece"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_100"
                        data-name="Path 100"
                        d="M306.2,379.287H303a11.659,11.659,0,0,1-11.659-11.66,13.26,13.26,0,1,1,26.52,0A11.66,11.66,0,0,1,306.2,379.287Z"
                        transform="translate(2149.322 75.054)"
                        fill="#3c3f44"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_101"
                        data-name="Path 101"
                        d="M282.9,435.276c-1.015-.523-1.661.768-2.584,1.8a7.581,7.581,0,0,0-1.8,2.7c-.221,1.223.883,3.151,2.1,4.213s2.641,1.824,3.084,4.152a5.663,5.663,0,0,0,3.764,4.753c2.645,1.142,6.188.777,7.39,0,1.423-.918.123-1.928-1.872-4.782-2.6-3.725-4.63-6.387-4.63-9.862Z"
                        transform="translate(2141.623 123.434)"
                        fill="#596067"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_102"
                        data-name="Path 102"
                        d="M283.55,433.323l-2.138,3.132a3.007,3.007,0,0,0,.721,4.175l.067.045a3.229,3.229,0,0,0,4.091-.636l3.337-3.641Z"
                        transform="translate(2143.053 122.336)"
                        fill="#fbdece"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_103"
                        data-name="Path 103"
                        d="M323.573,399.27c.136,3.994-1.564,15.867-4.477,23.509a71.4,71.4,0,0,1-6.063,12.466c-.87,1.485-25.884,25.839-25.884,25.839s-4.243-.312-4.918-4.429c0,0,10.249-17.421,12.468-21s10.079-9.053,10.079-9.053l-.715-31.254Z"
                        transform="translate(2143.865 99.599)"
                        fill="#8b8e95"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_104"
                        data-name="Path 104"
                        d="M323.573,399.27c.136,3.994-1.564,15.867-4.477,23.509a71.4,71.4,0,0,1-6.063,12.466c-.87,1.485-25.884,25.839-25.884,25.839s-4.243-.312-4.918-4.429c0,0,10.249-17.421,12.468-21s10.079-9.053,10.079-9.053l-.715-31.254Z"
                        transform="translate(2143.865 99.599)"
                        fill="#e7e8ec"
                        fillRule="evenodd"
                        opacity="0.3"
                      />
                      <rect
                        id="Rectangle_12"
                        data-name="Rectangle 12"
                        width="5.423"
                        height="7.898"
                        transform="translate(2458.604 571.895) rotate(-12.808)"
                        fill="#fbdece"
                      />
                      <path
                        id="Path_105"
                        data-name="Path 105"
                        d="M314.359,395.072l-22.508.884a21.763,21.763,0,0,0-1.885,10.666c.75,10.975,11.158,30.607,11.158,30.607-.128,1.49-.758,7.754.664,13.307,2.243,8.76,8.354,23.586,8.354,23.586s3.829.545,5.732-1.669c0,0-3.385-30.1-4.3-37.812-.986-8.344-3.521-23.585-3.521-23.585a38.538,38.538,0,0,0,4.537-5.438c4.042-5.585,3.42-10.546,3.42-10.546Z"
                        transform="translate(2148.462 99.43)"
                        fill="#8b8e95"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_106"
                        data-name="Path 106"
                        d="M314.362,395.072l-22.507.884a21.744,21.744,0,0,0-1.885,10.666c.75,10.975,11.157,30.607,11.157,30.607-.126,1.49-.756,7.754.665,13.307,2.243,8.76,8.354,23.586,8.354,23.586s3.829.545,5.73-1.669c0,0-3.383-30.1-4.3-37.812-.985-8.344-3.519-23.585-3.519-23.585a38.473,38.473,0,0,0,4.536-5.438c4.043-5.585,3.42-10.546,3.42-10.546Z"
                        transform="translate(2148.465 99.43)"
                        fill="#959a9e"
                        fillRule="evenodd"
                        opacity="0.3"
                      />
                      <path
                        id="Path_107"
                        data-name="Path 107"
                        d="M308.8,446.193l-.171-.756c.555.106,2.929,4.047,5.284,5.761,2.579,1.875,4.819,2.983,5.97,3.829,1.541,1.132-.691,3.447-4.485,3.653-1.883.1-5.311-.47-6.368-1.473s-1.823-2.662-2.659-3.383-2.532-1.353-3.108-2.277a6.565,6.565,0,0,1-.328-2.844c.034-.991.064-2.08.4-2.064l.13.576a6.566,6.566,0,0,0,3.217.71C307.575,447.883,309.237,447.675,308.8,446.193Z"
                        transform="translate(2156.255 129.59)"
                        fill="#596067"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_108"
                        data-name="Path 108"
                        d="M304.111,424.889s-2.251-16-2.852-18.478a25.238,25.238,0,0,0,5.009-3.583,41.1,41.1,0,0,1-3.426,4.28Z"
                        transform="translate(2155.26 104.075)"
                        fill="#263138"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_109"
                        data-name="Path 109"
                        d="M304.111,424.889s-2.251-16-2.852-18.476a25.224,25.224,0,0,0,5.007-3.585,40.966,40.966,0,0,1-3.425,4.28Z"
                        transform="translate(2155.26 104.075)"
                        fill="#8a8d94"
                        fillRule="evenodd"
                        opacity="0.5"
                      />
                      <path
                        id="Path_110"
                        data-name="Path 110"
                        d="M294.548,416.293s2.705,6.736,3.8,8.228c0,0-.273,5.132-.235,6.17l-1.421,1.239a32.148,32.148,0,0,1,.636-6.925A41.821,41.821,0,0,1,294.548,416.293Z"
                        transform="translate(2151.241 112.138)"
                        fill="#263138"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_111"
                        data-name="Path 111"
                        d="M294.548,416.293s2.705,6.736,3.8,8.228c0,0-.272,5.132-.233,6.17l-1.421,1.239a32.148,32.148,0,0,1,.636-6.925A41.821,41.821,0,0,1,294.548,416.293Z"
                        transform="translate(2151.241 112.138)"
                        fill="#8a8d94"
                        fillRule="evenodd"
                        opacity="0.5"
                      />
                      <path
                        id="Path_112"
                        data-name="Path 112"
                        d="M299.748,373.244s-7,.875-7.932,1.294c4.651,4.718,1.038,15.571,1.038,15.571l3.908,10.811c-2.737,4.36-5.12,7.115-6.322,11.245,2.045,2.368,14.258,9.492,28.218.507,0,0-.819-7.847-1.987-13.783,2.014-9.631,2.571-13.024,1.987-15.277-1.639-6.344-5.4-10.4-9.7-10.637Z"
                        transform="translate(2148.781 86.197)"
                        fill="#75777e"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_113"
                        data-name="Path 113"
                        d="M311.957,358.2c1.4.828,3.132,4.352,2.961,11.737-.146,6.259-2.174,7.806-3.193,8.252s-2.983.174-4.894-.144V381.8s2.64,3.067,2.475,4.79-3.813,2.128-6.283.446a19.931,19.931,0,0,1-4.55-4.963l.043-8.637s-1.124,1.092-3.031-.576c-1.573-1.375-2.1-3.695-.876-4.94a2.741,2.741,0,0,1,4.362.868,15.061,15.061,0,0,0,7.1-2.117A11.4,11.4,0,0,0,311.957,358.2Z"
                        transform="translate(2150.872 77.348)"
                        fill="#fbdece"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_114"
                        data-name="Path 114"
                        d="M303.275,364.845a.787.787,0,1,1-.827-.779A.8.8,0,0,1,303.275,364.845Z"
                        transform="translate(2155.525 80.862)"
                        fill="#263138"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_115"
                        data-name="Path 115"
                        d="M302.832,367.872l1.829.583a.943.943,0,0,1-1.19.656A1.007,1.007,0,0,1,302.832,367.872Z"
                        transform="translate(2156.178 83.142)"
                        fill="#eac2ad"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_116"
                        data-name="Path 116"
                        d="M307.32,363.62l-1.594-1.1a.933.933,0,0,1,1.324-.272A1.021,1.021,0,0,1,307.32,363.62Z"
                        transform="translate(2157.935 79.671)"
                        fill="#263138"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_117"
                        data-name="Path 117"
                        d="M307.083,364.491a.788.788,0,1,1-.828-.78A.8.8,0,0,1,307.083,364.491Z"
                        transform="translate(2157.805 80.649)"
                        fill="#263138"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_118"
                        data-name="Path 118"
                        d="M304.17,363.916l.125,4.738,2.494-.773Z"
                        transform="translate(2157.004 80.773)"
                        fill="#eac2ad"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_119"
                        data-name="Path 119"
                        d="M304.546,371.766c-2.013-.264-6.154-1.453-6.8-3.092a4.241,4.241,0,0,0,1.453,2.09c1.236,1.06,5.347,2.256,5.347,2.256Z"
                        transform="translate(2153.156 83.622)"
                        fill="#eac2ad"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_120"
                        data-name="Path 120"
                        d="M293.082,386.847l5.511,7.467-3.414-1.7Z"
                        transform="translate(2150.363 94.505)"
                        fill="#12181b"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_121"
                        data-name="Path 121"
                        d="M293.082,386.847l5.511,7.467-3.414-1.7Z"
                        transform="translate(2150.363 94.505)"
                        fill="#393f43"
                        fillRule="evenodd"
                        opacity="0.2"
                      />
                      <path
                        id="Path_122"
                        data-name="Path 122"
                        d="M305.943,397.4c.085-1.092,2.211-.179,2.338-.507.142-.376-1.271-1.939-3.191-1.639a37.706,37.706,0,0,1-7.169,0c-1.588-.1-5.235-3.685-7.588-6.173l-6.165,4.035c3.987,2.859,9.564,6.2,12.3,7.11,2.614.87,4.745,2.374,7.805,2.921Z"
                        transform="translate(2145.025 95.844)"
                        fill="#fbdece"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_123"
                        data-name="Path 123"
                        d="M292.885,374.133s2.467,1.824,2.6,9.735a26.691,26.691,0,0,1-4.139,14.107v4.617s6.694-5.845,8.293-14.535c1.808-9.833-.851-14.789-.851-14.789C298.687,372.6,292.786,373.46,292.885,374.133Z"
                        transform="translate(2149.322 86.227)"
                        fill="#b0b1b3"
                        fillRule="evenodd"
                        opacity="0.2"
                      />
                      <path
                        id="Path_124"
                        data-name="Path 124"
                        d="M292.885,374.133s2.467,1.824,2.6,9.735a26.691,26.691,0,0,1-4.139,14.107v4.617s6.694-5.845,8.293-14.535c1.808-9.833-.851-14.789-.851-14.789C298.687,372.6,292.786,373.46,292.885,374.133Z"
                        transform="translate(2149.322 86.227)"
                        fill="#a7a9af"
                        fillRule="evenodd"
                        opacity="0.6"
                      />
                      <path
                        id="Path_125"
                        data-name="Path 125"
                        d="M310.1,379.335s-3.7-5.239-8.1-6.288a6.607,6.607,0,0,1,4.781.5A10.891,10.891,0,0,1,310.1,379.335Z"
                        transform="translate(2155.703 86.098)"
                        fill="#8e9298"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_126"
                        data-name="Path 126"
                        d="M306.228,395.494c-.241-.814-7.981.814-7.814-1.209l-1.674,5.749a13.5,13.5,0,0,0,2.269.206C303.385,400.273,306.53,396.511,306.228,395.494Z"
                        transform="translate(2152.553 98.959)"
                        fill="#fbdece"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_127"
                        data-name="Path 127"
                        d="M306.471,392.2c-.243-.815-7.048-2.056-7.2-.532l-1.426,5v0l.008.011c.761,1.182,5.713.377,7.26.593C305.545,395.826,306.5,392.322,306.471,392.2Z"
                        transform="translate(2153.214 96.962)"
                        fill="#9c9d9d"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128"
                        data-name="Path 128"
                        d="M299.53,391.774c-.146.513-1.548,4.838-1.15,5.063l1.273-4.264c.12-1.162,4.768-.441,5.911.222-.678-.443-.377-.671-1.214-.971C303.412,391.491,299.6,391.048,299.53,391.774Z"
                        transform="translate(2153.494 97.22)"
                        fill="#b1b2b2"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_107989"
                    data-name="Group 107989"
                    transform="translate(1030.752 404.674)"
                    style={{ '--t': 'translate(1030.752px, 404.674px)' }}
                  >
                    <g
                      id="Group_80667"
                      data-name="Group 80667"
                      transform="translate(17.155 0.986)"
                      style={{ mixBlendMode: 'luminosity', isolation: 'isolate' }}
                    >
                      <path
                        id="Path_128144"
                        data-name="Path 128144"
                        d="M117.662,395.424v-1.795l7.367,4.264v1.8Z"
                        transform="translate(-117.66 -280.229)"
                        fill="#858583"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128145"
                        data-name="Path 128145"
                        d="M115.885,397.215l5.695-3.278v1.793l-5.695,3.279Z"
                        transform="translate(-108.516 -279.551)"
                        fill="#9f9e9e"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128146"
                        data-name="Path 128146"
                        d="M115.885,395.885l7.369,4.264,5.695-3.278-7.37-4.266Z"
                        transform="translate(-115.885 -282.486)"
                        fill="#bebdbd"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128147"
                        data-name="Path 128147"
                        d="M118.579,470.965V358.47l.673.4v112.5Z"
                        transform="translate(-114.82 -357.743)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128148"
                        data-name="Path 128148"
                        d="M118.185,359.1l1.263-.73V470.861l-1.263.73Z"
                        transform="translate(-113.753 -357.973)"
                        fill="#8b98a4"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128149"
                        data-name="Path 128149"
                        d="M118.185,358.971l.675.4,1.263-.73-.675-.393Z"
                        transform="translate(-114.428 -358.243)"
                        fill="#a2b1bf"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128150"
                        data-name="Path 128150"
                        d="M119.662,361.4a1.453,1.453,0,0,0-.731-1.189l-.122-.029-.067.455a1.485,1.485,0,0,0,.731,1.189l.128.026.061-.452Zm0,46.641a1.458,1.458,0,0,0-.731-1.189l-.122-.029-.067.452a1.484,1.484,0,0,0,.731,1.2l.128.019.061-.455Zm0,5.188a1.45,1.45,0,0,0-.731-1.192l-.122-.026-.067.452a1.465,1.465,0,0,0,.731,1.189l.128.029.061-.452Zm0,5.175a1.458,1.458,0,0,0-.731-1.189l-.122-.019-.067.452a1.476,1.476,0,0,0,.731,1.192l.128.019.061-.455Zm0,5.188a1.464,1.464,0,0,0-.731-1.192l-.122-.029-.067.455a1.465,1.465,0,0,0,.731,1.189l.128.029.061-.452Zm0,5.176a1.458,1.458,0,0,0-.731-1.189l-.122-.019-.067.452a1.471,1.471,0,0,0,.731,1.192l.128.019.061-.455Zm0,5.188a1.464,1.464,0,0,0-.731-1.192l-.122-.029-.067.455a1.483,1.483,0,0,0,.731,1.2l.128.019.061-.452Zm0,5.185a1.471,1.471,0,0,0-.731-1.2l-.122-.019-.067.452a1.476,1.476,0,0,0,.731,1.192l.128.026.061-.452Zm0,5.179a1.459,1.459,0,0,0-.731-1.192l-.122-.029-.067.455a1.479,1.479,0,0,0,.731,1.2l.128.016.061-.452Zm0,5.185a1.464,1.464,0,0,0-.731-1.192l-.122-.026-.067.452a1.456,1.456,0,0,0,.731,1.189l.128.029.061-.452Zm0,5.179a1.464,1.464,0,0,0-.731-1.192l-.122-.019-.067.452a1.466,1.466,0,0,0,.731,1.192l.128.019.061-.452Zm0,5.188a1.459,1.459,0,0,0-.731-1.192l-.122-.029-.067.452a1.457,1.457,0,0,0,.731,1.192l.128.026.061-.449Zm0,5.182a1.461,1.461,0,0,0-.731-1.2l-.122-.019-.067.455a1.465,1.465,0,0,0,.731,1.189l.128.029.061-.455Zm0,5.179a1.468,1.468,0,0,0-.731-1.192l-.122-.026-.067.455a1.492,1.492,0,0,0,.731,1.2l.128.019.061-.452Zm.846-109.977v112.5l-2.993-1.737v-112.5Z"
                        transform="translate(-112.668 -357.639)"
                        fill="#7a8791"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128151"
                        data-name="Path 128151"
                        d="M117.38,358.7l3,1.733.429-.258-2.994-1.733Z"
                        transform="translate(-112.535 -357.813)"
                        fill="#a2b1bf"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128152"
                        data-name="Path 128152"
                        d="M117.38,359.237l.429-.258v112.5l-.429.261Z"
                        transform="translate(-109.538 -356.62)"
                        fill="#a1b4af"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128153"
                        data-name="Path 128153"
                        d="M117.431,471.624V359.13l.676.393V472.018Z"
                        transform="translate(-109.997 -356.288)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128154"
                        data-name="Path 128154"
                        d="M117.037,359.753l1.263-.728V471.52l-1.263.728Z"
                        transform="translate(-108.927 -356.518)"
                        fill="#8b98a4"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128155"
                        data-name="Path 128155"
                        d="M117.036,359.633l.676.393,1.266-.728-.678-.4Z"
                        transform="translate(-109.602 -356.791)"
                        fill="#a2b1bf"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128156"
                        data-name="Path 128156"
                        d="M119.049,394.673a.373.373,0,0,1-.519.218,1.554,1.554,0,0,1-.727-1.208c-.038-.455.163-.737.455-.679l-.067.455a1.492,1.492,0,0,0,.731,1.2Z"
                        transform="translate(-112.116 -281.626)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128157"
                        data-name="Path 128157"
                        d="M119.049,393.06a.378.378,0,0,1-.519.208,1.534,1.534,0,0,1-.727-1.2c-.038-.455.163-.74.455-.683l-.067.455a1.465,1.465,0,0,0,.731,1.189Z"
                        transform="translate(-112.116 -285.189)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128158"
                        data-name="Path 128158"
                        d="M119.049,391.439a.373.373,0,0,1-.519.218,1.553,1.553,0,0,1-.727-1.208c-.038-.455.163-.737.455-.679l-.067.452a1.457,1.457,0,0,0,.731,1.192Z"
                        transform="translate(-112.116 -288.756)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128159"
                        data-name="Path 128159"
                        d="M119.049,389.818a.375.375,0,0,1-.519.218,1.535,1.535,0,0,1-.727-1.2c-.038-.455.163-.75.455-.682l-.067.452a1.467,1.467,0,0,0,.731,1.192Z"
                        transform="translate(-112.116 -292.32)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128160"
                        data-name="Path 128160"
                        d="M119.049,388.2a.375.375,0,0,1-.519.221,1.581,1.581,0,0,1-.727-1.211c-.038-.455.163-.737.455-.679l-.067.452a1.456,1.456,0,0,0,.731,1.189Z"
                        transform="translate(-112.116 -295.886)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128161"
                        data-name="Path 128161"
                        d="M119.049,386.588a.376.376,0,0,1-.519.218,1.538,1.538,0,0,1-.727-1.211c-.038-.452.163-.734.455-.679l-.067.455a1.479,1.479,0,0,0,.731,1.2Z"
                        transform="translate(-112.116 -299.455)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128162"
                        data-name="Path 128162"
                        d="M119.049,384.971a.373.373,0,0,1-.519.212,1.547,1.547,0,0,1-.727-1.2c-.038-.455.163-.737.455-.679l-.067.452a1.476,1.476,0,0,0,.731,1.192Z"
                        transform="translate(-112.116 -303.015)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128163"
                        data-name="Path 128163"
                        d="M119.049,383.355a.373.373,0,0,1-.519.218,1.538,1.538,0,0,1-.727-1.211c-.038-.452.163-.737.455-.679l-.067.455a1.483,1.483,0,0,0,.731,1.2Z"
                        transform="translate(-112.116 -306.585)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128164"
                        data-name="Path 128164"
                        d="M119.049,381.732a.374.374,0,0,1-.519.215,1.535,1.535,0,0,1-.727-1.2c-.038-.455.163-.747.455-.679l-.067.452a1.471,1.471,0,0,0,.731,1.192Z"
                        transform="translate(-112.116 -310.147)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128165"
                        data-name="Path 128165"
                        d="M119.049,380.12a.375.375,0,0,1-.519.218,1.57,1.57,0,0,1-.727-1.211c-.038-.449.163-.734.455-.679l-.067.455a1.466,1.466,0,0,0,.731,1.189Z"
                        transform="translate(-112.116 -313.714)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128166"
                        data-name="Path 128166"
                        d="M119.049,378.5a.374.374,0,0,1-.519.215,1.529,1.529,0,0,1-.727-1.2c-.038-.452.163-.747.455-.679l-.067.452a1.476,1.476,0,0,0,.731,1.192Z"
                        transform="translate(-112.116 -317.277)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128167"
                        data-name="Path 128167"
                        d="M119.049,376.885a.369.369,0,0,1-.519.208,1.536,1.536,0,0,1-.727-1.2c-.038-.452.163-.734.455-.676l-.067.452a1.465,1.465,0,0,0,.731,1.189Z"
                        transform="translate(-112.116 -320.842)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128168"
                        data-name="Path 128168"
                        d="M119.049,375.269a.374.374,0,0,1-.519.215,1.537,1.537,0,0,1-.727-1.208c-.038-.452.163-.737.455-.679l-.067.452a1.484,1.484,0,0,0,.731,1.2Z"
                        transform="translate(-112.116 -324.411)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128169"
                        data-name="Path 128169"
                        d="M117.784,372.66a1.534,1.534,0,0,0,.731,1.2.373.373,0,0,0,.516-.215l.061-.455a1.447,1.447,0,0,0-.734-1.189l-.115-.026C117.941,371.92,117.745,372.208,117.784,372.66Z"
                        transform="translate(-112.097 -327.975)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128170"
                        data-name="Path 128170"
                        d="M117.779,372.427a1.474,1.474,0,0,0,.731,1.192l.131.026.061-.455a1.447,1.447,0,0,0-.734-1.189l-.115-.026Z"
                        transform="translate(-111.708 -327.969)"
                        fill="#6e6e81"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128171"
                        data-name="Path 128171"
                        d="M117.784,371.039a1.523,1.523,0,0,0,.731,1.2.371.371,0,0,0,.516-.212l.061-.455a1.457,1.457,0,0,0-.734-1.192l-.115-.022C117.941,370.306,117.745,370.591,117.784,371.039Z"
                        transform="translate(-112.097 -331.539)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128172"
                        data-name="Path 128172"
                        d="M117.779,370.81A1.479,1.479,0,0,0,118.51,372l.131.026.061-.455a1.457,1.457,0,0,0-.734-1.192l-.115-.022Z"
                        transform="translate(-111.708 -331.534)"
                        fill="#6e6e81"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128173"
                        data-name="Path 128173"
                        d="M117.784,369.425a1.523,1.523,0,0,0,.731,1.2.37.37,0,0,0,.516-.215l.061-.452a1.448,1.448,0,0,0-.734-1.192l-.115-.026C117.941,368.688,117.745,368.973,117.784,369.425Z"
                        transform="translate(-112.097 -335.106)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128174"
                        data-name="Path 128174"
                        d="M117.779,369.2a1.479,1.479,0,0,0,.731,1.192l.131.022.061-.452a1.448,1.448,0,0,0-.734-1.192l-.115-.026Z"
                        transform="translate(-111.708 -335.101)"
                        fill="#6e6e81"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128175"
                        data-name="Path 128175"
                        d="M117.784,367.811a1.527,1.527,0,0,0,.731,1.2.373.373,0,0,0,.516-.215l.061-.455a1.446,1.446,0,0,0-.734-1.189l-.115-.026C117.941,367.07,117.745,367.356,117.784,367.811Z"
                        transform="translate(-112.097 -338.671)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128176"
                        data-name="Path 128176"
                        d="M117.779,367.575a1.479,1.479,0,0,0,.731,1.2l.131.022.061-.455a1.446,1.446,0,0,0-.734-1.189l-.115-.026Z"
                        transform="translate(-111.708 -338.666)"
                        fill="#6e6e81"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128177"
                        data-name="Path 128177"
                        d="M117.784,366.19a1.534,1.534,0,0,0,.731,1.2.373.373,0,0,0,.516-.215l.061-.452a1.453,1.453,0,0,0-.734-1.2l-.115-.022C117.941,365.453,117.745,365.739,117.784,366.19Z"
                        transform="translate(-112.097 -342.236)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128178"
                        data-name="Path 128178"
                        d="M117.779,365.961a1.484,1.484,0,0,0,.731,1.192l.131.023.061-.452a1.453,1.453,0,0,0-.734-1.2l-.115-.022Z"
                        transform="translate(-111.708 -342.231)"
                        fill="#6e6e81"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128179"
                        data-name="Path 128179"
                        d="M117.784,364.574a1.534,1.534,0,0,0,.731,1.2.372.372,0,0,0,.516-.218l.061-.452a1.452,1.452,0,0,0-.734-1.192l-.115-.022C117.941,363.834,117.745,364.119,117.784,364.574Z"
                        transform="translate(-112.097 -345.802)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128180"
                        data-name="Path 128180"
                        d="M117.779,364.341a1.474,1.474,0,0,0,.731,1.192l.131.022.061-.452a1.452,1.452,0,0,0-.734-1.192l-.115-.022Z"
                        transform="translate(-111.708 -345.796)"
                        fill="#6e6e81"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128181"
                        data-name="Path 128181"
                        d="M117.784,362.959a1.539,1.539,0,0,0,.731,1.2.372.372,0,0,0,.516-.218l.061-.452a1.452,1.452,0,0,0-.734-1.192l-.115-.026C117.941,362.218,117.745,362.5,117.784,362.959Z"
                        transform="translate(-112.097 -349.368)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128182"
                        data-name="Path 128182"
                        d="M117.779,362.726a1.479,1.479,0,0,0,.731,1.192l.131.022.061-.452a1.452,1.452,0,0,0-.734-1.192l-.115-.026Z"
                        transform="translate(-111.708 -349.363)"
                        fill="#6e6e81"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128183"
                        data-name="Path 128183"
                        d="M117.784,361.338a1.528,1.528,0,0,0,.731,1.2.37.37,0,0,0,.516-.215l.061-.452a1.448,1.448,0,0,0-.734-1.192l-.115-.025C117.941,360.6,117.745,360.887,117.784,361.338Z"
                        transform="translate(-112.097 -352.933)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128184"
                        data-name="Path 128184"
                        d="M117.779,361.109a1.479,1.479,0,0,0,.731,1.192l.131.022.061-.452a1.447,1.447,0,0,0-.734-1.192l-.115-.026Z"
                        transform="translate(-111.708 -352.928)"
                        fill="#6e6e81"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_128185"
                        data-name="Path 128185"
                        d="M119.049,360.712a.373.373,0,0,1-.519.218,1.57,1.57,0,0,1-.727-1.208c-.038-.455.163-.737.455-.679l-.067.455a1.485,1.485,0,0,0,.731,1.189Z"
                        transform="translate(-112.116 -356.498)"
                        fill="#6b7f83"
                        fillRule="evenodd"
                      />
                    </g>
                    <path
                      id="Path_128186"
                      data-name="Path 128186"
                      d="M133.172,358.011c.484.154,1.173,1.243,1.862,2.57,2.189,4.217,4.262,9.028,6.291,13.367,1.32,2.82,2.7,5.656,4.057,8.467s2.727,5.637,3.99,8.393c1.292,2.807,2.7,5.7,4.112,8.617.929,1.907,5.012,8.377.3,7.5-4.173-.779-8.223-1.586-12.117-2.378-3.762-.763-7.406-1.529-10.9-2.224-1.211-.243-5.951-1.134-10.287-1.99-4.147-.82-7.973-1.609-8.326-1.836-1.42-.9-.513-2.477-.058-3.336q2.774-5.249,5.74-10.861,3.057-5.8,6.349-12.043c1.3-2.493,2.593-4.916,3.91-7.39.945-1.795,1.932-3.964,2.958-5.672C131.557,358.361,132.2,357.707,133.172,358.011Z"
                      transform="translate(-111.391 -357.935)"
                      fill="#dfefef"
                      fillRule="evenodd"
                    />
                    <path
                      id="Path_128187"
                      data-name="Path 128187"
                      d="M132.149,366.662q-4.23,7.653-8.1,14.661-3.706,6.715-7.134,12.9c4.5.8,9.217,1.647,14.184,2.529q7.845,1.394,16.575,2.936-3.975-8.451-7.877-16.744-3.855-8.215-7.646-16.28Zm.679-8.361c.468.147,1.134,1.2,1.8,2.487,2.115,4.073,4.118,8.723,6.079,12.918,1.279,2.727,2.605,5.467,3.923,8.185s2.634,5.448,3.855,8.111c1.247,2.711,2.615,5.509,3.971,8.329.9,1.843,4.845,8.095.292,7.252-4.035-.753-7.948-1.535-11.713-2.3-3.634-.737-7.156-1.477-10.531-2.15-1.173-.234-5.752-1.093-9.941-1.923-4.012-.792-7.707-1.554-8.05-1.772-1.372-.869-.494-2.4-.054-3.227q2.682-5.071,5.547-10.5,2.956-5.61,6.137-11.639c1.263-2.413,2.506-4.756,3.778-7.146.913-1.734,1.868-3.83,2.859-5.48C131.268,358.641,131.893,358.009,132.829,358.3Z"
                      transform="translate(-111.516 -357.289)"
                      fill="#cb262d"
                      fillRule="evenodd"
                    />
                    <path
                      id="Path_128188"
                      data-name="Path 128188"
                      d="M147.556,396.351q-9.705-1.764-18.315-3.346c-5.547-1.013-10.793-1.977-15.77-2.891-.356-.064-.231-.253-.112-.458q3.74-6.441,7.807-13.472c2.846-4.916,5.624-10.3,8.739-15.719.2-.343.5-.109.583.067,2.839,5.7,5.909,11.691,8.8,17.507q4.3,8.652,8.714,17.52C148.258,396.078,148.235,396.472,147.556,396.351Z"
                      transform="translate(-109.447 -352.746)"
                      fill="#fdfdfd"
                      fillRule="evenodd"
                    />
                    <path
                      id="Path_128189"
                      data-name="Path 128189"
                      d="M116.716,382.132l.109-15.27,2.853-3.458,2.951,3.865-.028,5.142,4.125.427-.01,2.562-4.217-.471-.042,8-2.881-2.786Z"
                      transform="translate(-99.168 -345.88)"
                      fillRule="evenodd"
                    />
                    <g id="Group_107990" data-name="Group 107990" transform="translate(-1.675 -4.393)">
                      <path
                        id="Path_56775-3"
                        data-name="Path 56775"
                        className="jss82"
                        d="M313.873,523.158V517.6m-45.533,59.676h-5.247m0-5.555v5.555m4.714-59.676h-5.247m0,5.555V517.6m46.6,59.676h5.247m0-5.555v5.555M308.626,517.6h5.248"
                        transform="translate(-262.561 -517.603)"
                        fill="none"
                        stroke="#fb0e0e"
                        strokeWidth={2}
                        fillRule="evenodd"
                        style={{ '--t': 'translate(-262.561px, -517.603px)' }}
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="mx-auto mt-[50px] grid grid-cols-5 items-center gap-4 md:w-[500px]">
          {LIST_LOGO.map((url, index) => {
            return <img key={index} className="w-[100%]" src={url} alt="image" />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AutonomousBanner;
