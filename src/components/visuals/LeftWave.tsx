export function LeftWave() {
  const gradientId = 'left-wave-gradient';
  
  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden">
      <svg
        viewBox="0 0 1264 1178"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-0 h-full w-auto opacity-80"
        aria-hidden="true"
        preserveAspectRatio="xMinYMin meet"
      >
        <path
          d="M-559.517 -1220.09C-551.694 -1221.12 -540.974 -1220.68 -532.135 -1223.71C-377.843 -1232.95 -243.786 -1159.59 -242.06 -1148.66C-122.765 -831.663 84.933 -165.702 183.806 148.417C263.484 400.005 320.554 660.162 422.685 910.644C445.949 967.7 491.096 981.953 533.023 951.824C584.336 922.73 624.22 880.277 671.774 844.244C766.884 772.178 930.629 614.266 1116.04 751.486C1218.8 828.991 1256.79 926.216 1263.64 1020.12C1266.32 1079.26 1167.54 1302.94 1111.05 1299.26C1068.18 1297.49 1030.75 1220.64 1012.97 1183.95C987.676 1133.38 978.892 1086.21 953.599 1035.64C946.638 1042.14 935.766 1049.15 928.805 1055.65C886.888 1102.09 850.762 1151.49 801.175 1191.51C681.982 1296.5 456.727 1294.68 280.253 1197.18C209.898 1156.29 17.0299 1197.6 -29.2415 1123.78C-201.882 839.861 -375.671 462.125 -498.474 173.479C-628.795 -129.045 -655.729 -809.523 -792.863 -1113.01C-794.589 -1123.94 -741.339 -1199.76 -559.517 -1220.09Z"
          fill={`url(#${gradientId})`}
        />
        <defs>
          <linearGradient
            id={gradientId}
            x1="-470.193"
            y1="-286.333"
            x2="1154.01"
            y2="999.43"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.095667" stopColor="#03A7FF" />
            <stop offset="0.607129" stopColor="#0D2257" />
            <stop offset="1" stopColor="#0A0A0A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}