import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import { paths } from 'constants/paths';
import { MotionYContainer } from '@components/Motion';

const LIST_LOGO = [
  '/images/google_map_logo.svg',
  '/images/map_esri.svg',
  '/images/map_here.svg',
  '/images/map_mapbox.svg',
  '/images/map_tomtom.svg',
];

const EnergyBanner = () => {
  const router = useRouter();
  const [showDrone, setShowDrone] = useState(false);
  const [showCar, setShowCar] = useState(false);

  useEffect(() => {
    let timerDrone = setTimeout(() => setShowDrone(true), 800);
    let timerCar = setTimeout(() => setShowCar(true), 1500);
    return () => {
      clearTimeout(timerDrone);
      clearTimeout(timerCar);
    };
  }, []);

  return (
    <section className="section overflow-hidden md:pt-[100px]">
      <div className="container">
        <div className="relative z-[3] flex flex-wrap justify-between">
          <div className="w-full md:order-2 lg:order-1 lg:w-[50%]">
            <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
              <Typography variant="h2" className="mb-3 text-5xl">
                Streetview Energy
                <br />
                Solutions
              </Typography>
              <Typography variant="paragraph" className="mb-3 text-lg text-gray-600">
                Use artificial intelligence to ensure an uninterrupted, secure energy transfer and for your inventory
                management.
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
            </MotionYContainer>
          </div>

          <div className="relative w-full md:order-1 lg:order-2 max-md:hidden md:h-[480px] lg:h-auto lg:w-[50%]">
            <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
              <img src="/images/energy-header-bg.png" alt="energy-header-bg" className="energy-header-bg" />

              <div className="energy-banner-svg-1">
                <svg xmlns="http://www.w3.org/2000/svg" width={923} height={512} viewBox="0 0 923 512">
                  <g id="detect3" transform="translate(-1888 -8509)">
                    <g
                      className="jss251"
                      id="Group_104761"
                      data-name="Group 104761"
                      transform="translate(2248.152 7948.603)"
                    >
                      <rect
                        id="Rectangle_38729"
                        data-name="Rectangle 38729"
                        width={923}
                        height={512}
                        transform="translate(-360.152 560.397)"
                        fill="#fff"
                        opacity={0}
                      />
                      <rect
                        id="Rectangle_38730"
                        data-name="Rectangle 38730"
                        width="17.723"
                        height="15.878"
                        transform="translate(167.256 787.134)"
                        fill="#434242"
                        opacity="0.15"
                      />
                      <rect
                        id="Rectangle_38731"
                        data-name="Rectangle 38731"
                        width="37.045"
                        height="33.191"
                        transform="translate(260.352 874.557)"
                        fill="#434242"
                        opacity="0.15"
                      />
                      <rect
                        id="Rectangle_38732"
                        data-name="Rectangle 38732"
                        width="28.172"
                        height={35}
                        transform="translate(396.66 918.435)"
                        fill="#434242"
                        opacity="0.15"
                      />
                      <rect
                        id="Rectangle_38733"
                        data-name="Rectangle 38733"
                        width="17.722"
                        height="19.093"
                        transform="translate(158.305 856.345)"
                        fill="#434242"
                        opacity="0.15"
                      />
                      <rect
                        id="Rectangle_38734"
                        data-name="Rectangle 38734"
                        width="52.517"
                        height="73.672"
                        transform="translate(78.437 833.167)"
                        fill="#393939"
                        opacity="0.15"
                      />
                      <rect
                        id="Rectangle_38735"
                        data-name="Rectangle 38735"
                        width="36.167"
                        height="111.784"
                        transform="translate(-237.09 566.408)"
                        fill="#393939"
                        opacity="0.15"
                      />
                      <rect
                        id="Rectangle_38736"
                        data-name="Rectangle 38736"
                        width="38.994"
                        height="36.784"
                        transform="translate(-156.281 705.255)"
                        fill="#393939"
                        opacity="0.15"
                      />
                      <rect
                        id="Rectangle_38737"
                        data-name="Rectangle 38737"
                        width="38.994"
                        height="18.784"
                        transform="translate(-169.165 793.534)"
                        fill="#393939"
                        opacity="0.15"
                      />
                      <rect
                        id="Rectangle_38738"
                        data-name="Rectangle 38738"
                        width="34.994"
                        height="121.784"
                        transform="translate(-84.542 744.85)"
                        fill="#393939"
                        opacity="0.15"
                      />
                      <rect
                        id="Rectangle_38739"
                        data-name="Rectangle 38739"
                        width="52.376"
                        height="69.183"
                        transform="translate(333.5 914.879)"
                        fill="#434242"
                        opacity="0.15"
                      />
                      <rect
                        id="Rectangle_38788"
                        data-name="Rectangle 38788"
                        width="83.124"
                        height="21.199"
                        transform="translate(-71.303 675.101)"
                        fill="#434242"
                        opacity="0.15"
                      />
                      <path
                        id="Path_177681"
                        data-name="Path 177681"
                        d="M301.873,436.158V431.6M267.341,547.279h-4.247m0-4.555v4.555M266.808,431.6h-4.247m0,4.555V431.6m35.6,115.676h4.247m0-4.555v4.555M297.626,431.6h4.248"
                        fill="none"
                        stroke="#fb0e0e"
                        strokeWidth="1.417"
                        fillRule="evenodd"
                        style={{ '--t': 'translate(-501.99px, 133.029px)' }}
                      />
                      <path
                        id="Path_177682"
                        data-name="Path 177682"
                        d="M306.406,510.719v-4.555m-39.066,41.116h-4.247m0-4.555v4.555m4.247-41.116h-4.247m0,4.555v-4.555m39.066,41.116h4.247m0-4.555v4.555m-4.248-41.116h4.248"
                        fill="none"
                        stroke="#fb0e0e"
                        strokeWidth="1.417"
                        fillRule="evenodd"
                        style={{ '--t': 'translate(-421.181px, 196.876px)' }}
                      />
                      <path
                        id="Path_188270"
                        data-name="Path 188270"
                        d="M351.406,510.719v-4.555m-84.066,28.116h-4.247m0-4.555v4.555m4.247-28.116h-4.247m0,4.555v-4.555m84.066,28.116h4.247m0-4.555v4.555m-4.248-28.116h4.248"
                        fill="none"
                        stroke="#fb0e0e"
                        strokeWidth="1.417"
                        fillRule="evenodd"
                        style={{ '--t': 'translate(-336.855px, 165.424px)' }}
                      />
                      <path
                        id="Path_177683"
                        data-name="Path 177683"
                        d="M306.406,516.719v-4.555m-39.066,23.116h-4.247m0-4.555v4.555m4.247-23.116h-4.247m0,4.555v-4.555m39.066,23.116h4.247m0-4.555v4.555m-4.248-23.116h4.248"
                        fill="none"
                        stroke="#fb0e0e"
                        strokeWidth="1.417"
                        fillRule="evenodd"
                        style={{ '--t': 'translate(-434.065px, 279.155px)' }}
                      />
                      <g id="Group_104762" data-name="Group 104762" transform="translate(-159.712 801.557)">
                        <path
                          id="Path_120901"
                          data-name="Path 120901"
                          d="M-176.668,777.864l1.334-.986c.116-.085.232-.041.23.1-.014,1.074.021,1.407.005,2.482a.126.126,0,0,1-.189.093l-1.454-1.016C-177.11,778.28-177.073,778.164-176.668,777.864Z"
                          transform="translate(176.996 -776.834)"
                          fill="#fb0e0e"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_120902"
                          data-name="Path 120902"
                          d="M-174.037,777.811a.407.407,0,0,0-.372.189.4.4,0,0,0-.054.4c.107.309.4.285.761.3.475.008.951.008,1.427.005a.442.442,0,0,0,0-.883C-172.862,777.823-173.452,777.825-174.037,777.811Z"
                          transform="translate(177.233 -776.742)"
                          fill="#fb0e0e"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_120903"
                          data-name="Path 120903"
                          d="M-170.208,777.811a.406.406,0,0,0-.371.189.4.4,0,0,0-.054.4c.107.309.4.285.761.3.475.008.95.008,1.427.005a.442.442,0,0,0,0-.883C-169.032,777.823-169.622,777.825-170.208,777.811Z"
                          transform="translate(177.595 -776.742)"
                          fill="#fb0e0e"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_120904"
                          data-name="Path 120904"
                          d="M-166.317,777.811a.407.407,0,0,0-.372.189.4.4,0,0,0-.053.4c.106.309.4.285.76.3.476.008.951.008,1.427.005a.442.442,0,0,0,0-.883C-165.142,777.823-165.732,777.825-166.317,777.811Z"
                          transform="translate(177.964 -776.742)"
                          fill="#fb0e0e"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_120905"
                          data-name="Path 120905"
                          d="M-162.8,777.811a.409.409,0,0,0-.372.189.4.4,0,0,0-.053.4c.106.309.4.285.76.3.476.008.951.008,1.427.005a.442.442,0,0,0,0-.883C-161.625,777.823-162.215,777.825-162.8,777.811Z"
                          transform="translate(178.297 -776.742)"
                          fill="#fb0e0e"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_120906"
                          data-name="Path 120906"
                          d="M-158.486,777.864l-1.334-.986c-.116-.086-.232-.039-.23.1.014,1.075-.021,1.407-.007,2.482a.128.128,0,0,0,.19.094l1.454-1.016C-158.045,778.28-158.082,778.163-158.486,777.864Z"
                          transform="translate(178.599 -776.834)"
                          fill="#fb0e0e"
                          fillRule="evenodd"
                        />
                      </g>
                      <path
                        id="Path_177684"
                        data-name="Path 177684"
                        d="M302.406,516.719v-4.555m-35.066,125.1h-4.247m0-4.555v4.555m4.247-125.1h-4.247m0,4.555v-4.555m35.066,125.1h4.247m0-4.555v4.555m-4.248-125.1h4.248"
                        fill="none"
                        stroke="#fb0e0e"
                        strokeWidth="1.417"
                        fillRule="evenodd"
                        style={{ '--t': 'translate(-349.491px, 230.8px)' }}
                      />
                      <path
                        id="Path_177685"
                        data-name="Path 177685"
                        d="M319.406,562.719v-4.555m-52.066,79.1h-4.247m0-4.555v4.555m4.247-79.1h-4.247m0,4.555v-4.555m52.066,79.1h4.247m0-4.555v4.555m-4.248-79.1h4.248"
                        fill="none"
                        stroke="#fb0e0e"
                        strokeWidth="1.417"
                        fillRule="evenodd"
                        style={{ '--t': 'translate(-186.563px, 271.799px)' }}
                      />
                      <path
                        id="Path_177686"
                        data-name="Path 177686"
                        d="M287.406,563.719v-4.555m-19.066,24.1h-4.247m0-4.555v4.555m4.247-24.1h-4.247m0,4.555v-4.555m19.066,24.1h4.247m0-4.555v4.555m-4.248-24.1h4.248"
                        fill="none"
                        stroke="#fb0e0e"
                        strokeWidth="1.417"
                        fillRule="evenodd"
                        style={{ '--t': 'translate(-108.589px, 294.799px)' }}
                      />
                      <path
                        id="Path_177687"
                        data-name="Path 177687"
                        d="M307.406,563.719v-4.555m-39.066,39.1h-4.247m0-4.555v4.555m4.247-39.1h-4.247m0,4.555v-4.555m39.066,39.1h4.247m0-4.555v4.555m-4.248-39.1h4.248"
                        fill="none"
                        stroke="#fb0e0e"
                        strokeWidth="1.417"
                        fillRule="evenodd"
                        style={{ '--t': 'translate(-6.636px, 312.799px)' }}
                      />
                      <path
                        id="Path_177688"
                        data-name="Path 177688"
                        d="M298.406,563.719v-4.555m-30.066,41.1h-4.247m0-4.555v4.555m4.247-41.1h-4.247m0,4.555v-4.555m30.066,41.1h4.247m0-4.555v4.555m-4.248-41.1h4.248"
                        fill="none"
                        stroke="#fb0e0e"
                        strokeWidth="1.417"
                        fillRule="evenodd"
                        style={{ '--t': 'translate(129.597px, 356.468px)' }}
                      />
                      <path
                        id="Path_177689"
                        data-name="Path 177689"
                        d="M287.406,565.719v-4.555m-19.066,22.1h-4.247m0-4.555v4.555m4.247-22.1h-4.247m0,4.555v-4.555m19.066,22.1h4.247m0-4.555v4.555m-4.248-22.1h4.248"
                        fill="none"
                        stroke="#fb0e0e"
                        strokeWidth="1.417"
                        fillRule="evenodd"
                        style={{ '--t': 'translate(-99.593px, 222.8px)' }}
                      />
                      <path
                        id="Path_177690"
                        data-name="Path 177690"
                        d="M322.406,563.719v-4.555m-54.066,75.1h-4.247m0-4.555v4.555m4.247-75.1h-4.247m0,4.555v-4.555m54.066,75.1h4.247m0-4.555v4.555m-4.248-75.1h4.248"
                        fill="none"
                        stroke="#fb0e0e"
                        strokeWidth="1.417"
                        fillRule="evenodd"
                        style={{ '--t': 'translate(66.511px, 353.123px)' }}
                      />
                      <g id="Group_106961" data-name="Group 106961" transform="translate(-55.936 686.704)">
                        <path
                          id="Path_120898"
                          data-name="Path 120898"
                          d="M-81.718,676.324l1.572-.53c.138-.046.233.034.189.165-.344,1.019-.41,1.346-.754,2.364a.128.128,0,0,1-.21.032l-1.073-1.413C-82.265,676.585-82.194,676.485-81.718,676.324Z"
                          transform="translate(82.151 -675.781)"
                          fill="#fb0e0e"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_120899"
                          data-name="Path 120899"
                          d="M-35.843,676.6l-1.606-.415c-.141-.036-.231.049-.177.178.416.992.508,1.313.923,2.3a.129.129,0,0,0,.212.016l.968-1.487C-35.279,676.819-35.356,676.725-35.843,676.6Z"
                          transform="translate(86.364 -675.744)"
                          fill="#fb0e0e"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_120900"
                          data-name="Path 120900"
                          d="M-79.261,677.05a.413.413,0,0,0-.414.061.4.4,0,0,0-.175.361c0,.326.287.4.625.526.45.158.9.308,1.353.456a.442.442,0,0,0,.277-.839c-.556-.184-1.117-.369-1.666-.566Zm45.065,1.257a.442.442,0,0,0-.293-.834c-.553.2-1.109.375-1.663.567a.442.442,0,0,0,.271.841q.846-.276,1.685-.574Zm-4.239,1.352a.442.442,0,0,0-.24-.852c-.565.158-1.129.31-1.7.455a.443.443,0,0,0,.217.858c.575-.15,1.147-.3,1.72-.462Zm-4.322,1.067a.442.442,0,0,0-.182-.865q-.86.179-1.723.338a.442.442,0,0,0,.158.87c.585-.107,1.165-.223,1.747-.344Zm-4.384.768a.442.442,0,0,0-.122-.876c-.579.084-1.163.153-1.743.219a.442.442,0,0,0,.1.879c.588-.066,1.18-.137,1.767-.222Zm-4.429.462a.443.443,0,0,0-.058-.883q-.877.061-1.755.1a.442.442,0,0,0,.035.883c.591-.021,1.187-.056,1.778-.1Zm-4.449.148a.442.442,0,0,0,0-.883c-.585,0-1.172-.01-1.757-.027a.442.442,0,0,0-.026.883c.593.019,1.188.03,1.781.027Zm-4.449-.159a.442.442,0,0,0,.063-.882c-.585-.04-1.168-.091-1.751-.147a.442.442,0,0,0-.086.88q.885.085,1.774.149Zm-4.427-.461a.442.442,0,0,0,.122-.876c-.58-.08-1.159-.169-1.738-.262a.442.442,0,0,0-.143.872c.585.1,1.173.184,1.76.265Zm-4.386-.747a.442.442,0,0,0,.177-.866q-.862-.176-1.719-.371a.442.442,0,0,0-.2.862q.869.2,1.739.375Zm-4.329-1.017a.442.442,0,0,0,.228-.854q-.849-.227-1.693-.472a.442.442,0,0,0-.248.848Q-74.468,679.492-73.609,679.721Z"
                          transform="translate(82.369 -675.664)"
                          fill="#fb0e0e"
                          fillRule="evenodd"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </MotionYContainer>

            {showCar && (
              <>
                <img src="/images/energy-header-car.svg" alt="energy-header-car" className="energy-header-car jss245" />
                <div className="energy-banner-svg-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="708.668"
                    height="475.927"
                    viewBox="0 0 708.668 475.927"
                  >
                    <g
                      className="jss254"
                      id="Group_104990"
                      data-name="Group 104990"
                      transform="translate(-941.384 -300.193)"
                    >
                      <path
                        className="jss258"
                        id="Rectangle_8"
                        data-name="Rectangle 8"
                        d="M362.961,4.464h0c178.2-21.23,305.091,35.286,283.861,126.435h0c-21.23,91.148-182.439,181.986-360.643,203.216h0c-178.2,21.23-305.09-35.286-283.86-126.435h0C23.549,116.532,184.756,25.694,362.961,4.464Z"
                        fill="#5884c2"
                        opacity="0.15"
                      />
                      <path
                        className="jss257"
                        id="Rectangle_8-2"
                        data-name="Rectangle 8"
                        d="M230.777,2.839h0C344.082-10.66,424.759,25.274,411.26,83.228h0c-13.5,57.954-116,115.71-229.3,129.208h0C68.652,225.934-12.024,190,1.475,132.047h0C14.973,74.093,117.471,16.337,230.777,2.839Z"
                        fill="#5884c2"
                        opacity="0.15"
                      />
                      <path
                        className="jss256"
                        id="Rectangle_8-3"
                        data-name="Rectangle 8"
                        d="M137.805,1.7h0c67.659-8.06,115.834,13.4,107.774,48h0c-8.06,34.606-69.267,69.095-136.925,77.155h0C41,134.914-7.18,113.457.881,78.85h0C8.941,44.244,70.147,9.755,137.805,1.7Z"
                        fill="#5884c2"
                        opacity="0.15"
                      />
                      <path
                        className="jss255"
                        id="Rectangle_8-4"
                        data-name="Rectangle 8"
                        d="M45.723.562h0C68.171-2.112,84.156,5.007,81.481,16.49h0C78.807,27.972,58.5,39.415,36.05,42.089h0C13.6,44.763-2.382,37.644.292,26.162h0C2.967,14.68,23.274,3.237,45.723.562Z"
                        fill="#5884c2"
                        opacity="0.15"
                      />
                    </g>
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>

        {showDrone && <img src="/images/energy-drone.png" alt="energy-drone" className="energy-drone jss246" />}

        <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
          <div className="mx-auto mt-[50px] grid grid-cols-5 items-center gap-4 md:mt-[70px] md:w-[500px] lg:mt-[150px]">
            {LIST_LOGO.map((url, index) => {
              return <img key={index} className="w-[100%]" src={url} alt="image" />;
            })}
          </div>
        </MotionYContainer>
      </div>
    </section>
  );
};

export default EnergyBanner;
