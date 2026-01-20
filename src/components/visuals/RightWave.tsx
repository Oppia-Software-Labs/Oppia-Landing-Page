export function RightWave() {
  const gradientId = 'right-wave-gradient';
  
  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden">
      <svg
        viewBox="0 0 516 1178"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-0 h-full w-auto"
        aria-hidden="true"
        preserveAspectRatio="xMaxYMin meet"
      >
        <path
          d="M1427.57 -1533.63C1433.99 -1528.41 1441.23 -1519.98 1450.03 -1515.37C1567.28 -1404.72 1601.33 -1252.14 1593.45 -1243.25C1414.04 -932.965 1006.64 -313.659 815.122 -20.8593C662.076 214.024 485.838 437.695 349.655 688.846C318.635 746.054 338.814 790.189 393.685 801.11C454.358 819.871 518.047 820.697 581.833 831.795C709.405 853.991 900.191 825.652 917.503 1061.46C925.89 1193.16 871.856 1289.39 798.476 1359.69C751.113 1402.73 551.655 1525.96 514.616 1480.55C485.645 1446.79 523.1 1365.11 541.047 1326.19C565.221 1271.94 598.287 1232.57 622.461 1178.32C612.105 1177.54 598.541 1174.16 588.186 1173.38C519.73 1173.78 452.926 1180.61 384.375 1170.74C212.27 1153.1 53.8503 980.935 9.79099 779.443C-6.092 697.714 -3.74121 607.875 24.9117 521.588C138.888 193.761 322.527 -90.1547 475.83 -383.45C635.358 -692.07 1017.19 -1321.98 1172.68 -1636.44C1180.56 -1645.32 1281.54 -1657.49 1427.57 -1533.63Z"
          fill={`url(#${gradientId})`}
        />
        <defs>
          <linearGradient
            id={gradientId}
            x1="713.005"
            y1="-818.473"
            x2="853.853"
            y2="1301.35"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0726653" stopColor="#03A7FF" />
            <stop offset="0.627919" stopColor="#061A4B" />
            <stop offset="1" stopColor="#0A0A0A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}