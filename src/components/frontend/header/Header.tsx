import Image from "next/image";

import Hero from "@/images/hero-1.jpg";
import LogoIcon from "@/images/logo-icon.png";
import Link from "next/link";

const Header = () => {

    return (
        <>
            <div className="relative z-10 mb-10">
                <nav className="absolute flex p-6 top-0 left-0 right-0 z-20 justify-end">

                    <div className="hidden lg:flex lg:gap-x-12">
                        <Link href="/menu/menu.pdf" target="_blank" className="text-sm font-extrabold tracking-wide leading-6 text-white">MENU</Link>
                        <Link href="/menu/catering-menu.pdf" target="_blank" className="text-sm font-extrabold tracking-wide leading-6 text-white">CATERING</Link>
                        <a href="#location" className="text-sm font-extrabold tracking-wide leading-6 text-white">
                            LOCATION
                        </a>
                        <a href="#contact" className="text-sm font-extrabold tracking-wide leading-6 text-white">
                            CONTACT US
                        </a>
                    </div>

                </nav>

                <header
                    className="relative overflow-hidden bg-cover bg-no-repeat"
                    style={{
                        // backgroundPosition: '50%',
                        // backgroundImage: `url(${Hero.src})`,
                        height: '840px'
                    }}
                >
                    <div style={{ position: 'absolute', width: '100%', height: '840px', zIndex: '-10' }}>
                        <Image
                            src={Hero}
                            alt="Description of the image"
                            layout="fill"
                            objectFit="cover" // Similar to background-size: cover
                            objectPosition="50% 50%" // Similar to background-position: 50% 50%
                        />
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center space-y-4">
                        <Image
                            src={LogoIcon}
                            alt="Logo Icon"
                        />
                        <h1 className="text-[85px] border-none text-white  font-playlist">Go Goa Eatery</h1>
                        {/* <p className="text-white text-lg">Closed ⋅ Opens 6:45 am Tue</p> */}
                    </div>
                </header>
                <div className="absolute bottom-0 left-0 w-full">
                    <svg viewBox="0 0 1440 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_68_181)">
                            <path d="M1430.01 9.63589C1428.77 8.30395 1427.05 9.37624 1425.64 8.97516C1425.17 9.3059 1424.98 9.87908 1424.24 9.75636C1422.74 8.27926 1420.48 8.55911 1418.65 7.72628C1418.33 7.78165 1418.32 8.47231 1417.72 7.97321C1417.64 7.88866 1417.48 7.70682 1416.94 7.11868C1416.57 7.82056 1416.23 8.46932 1415.89 9.12631C1414.31 7.33867 1412.01 9.24529 1410.63 7.6073C1409.88 8.70353 1408.24 7.83628 1407.54 9.00958C1407.16 8.72598 1406.95 8.24708 1406.34 8.26953C1403.58 8.37055 1401.25 9.91724 1398.74 10.5039C1396.75 8.82326 1394.01 10.7965 1392.01 8.76639C1390.63 11.0748 1387.95 8.67285 1386.38 10.5263C1384.3 9.62691 1382.18 10.3685 1380.64 11.3869C1378.73 12.647 1376.4 10.994 1374.93 12.9201C1374.39 12.5534 1374.01 12.2878 1373.6 12.0109C1372.68 12.1045 1371.88 13.4327 1370.97 12.7218C1369.85 11.8418 1368.67 11.9675 1367.49 12.0573C1366.3 12.1486 1365.37 11.5208 1364.58 10.9573C1363.45 10.1544 1362.6 8.95495 1361.18 10.3909C1359.25 9.1727 1357.41 11.1556 1355.47 10.5548C1354.93 10.3864 1354.34 10.5009 1353.78 10.9761C1352.96 11.66 1351.95 11.2357 1350.77 11.119C1350.5 10.7052 1350.18 10.2083 1349.61 9.32909C1349.05 10.245 1348.66 10.8825 1348.62 10.9499C1346.9 11.8598 1346.36 10.3295 1345.4 10.5129C1343.67 11.8224 1342 11.4175 1340.25 10.4784C1340 10.6723 1339.73 11.0763 1339.45 11.0801C1336.11 11.125 1332.78 11.1085 1328.96 11.1085C1328.78 10.8054 1328.4 10.1642 1328.08 9.6299C1326.47 10.3842 1325.2 11.1526 1323.78 10.0325C1322.82 9.27671 1321.3 10.3872 1320.44 8.98489C1319.72 7.80485 1317.79 8.5419 1317.12 7.11718C1314.83 7.01093 1312.76 5.17016 1310.24 6.48863C1308.98 7.1501 1307.19 7.27058 1306.05 6.42203C1304.6 5.34451 1303.82 6.58441 1302.98 6.74753C1301.48 6.20353 1300.18 5.73137 1298.87 5.25696C1297.7 6.57243 1296.53 6.12646 1295.42 5.20608C1294.22 6.14666 1292.93 6.5021 1291.71 5.65879C1290.99 5.15669 1290.3 5.28465 1289.61 5.31009C1287.05 5.40437 1284.72 4.53637 1282.33 3.78659C1282.07 4.02829 1281.8 4.27671 1281.38 4.65908C1280.94 4.09114 1280.48 3.50823 1280.08 3.00389C1278.17 3.00389 1276.43 3.00389 1273.95 3.00389C1273.85 2.76519 1273.55 2.0446 1273.43 1.76474C1272.25 1.27462 1272.14 2.38506 1271.4 2.28704C1270.7 2.54669 1270.63 1.3674 1269.9 1.54924C1269.48 1.19231 1268.99 1.11823 1268.52 1.35319C1264.96 3.1311 1261.34 2.64172 1257.61 1.90242C1254.97 1.37938 1252.1 1.20129 1249.53 1.88671C1243.13 3.59353 1238.76 1.59787 1232.57 1C1232.07 1 1230.15 1.57243 1229.65 1.57243C1229.45 2.65594 1228.07 2.21072 1227.5 3.09892C1225.78 2.71955 1223.85 3.71625 1222.25 2.34765C1221.86 2.58111 1221.67 3.12511 1221.04 3.05253C1218.96 2.81158 1216.99 3.30694 1215.15 4.20189C1214.06 4.73466 1212.76 4.85364 1211.96 4.46004C1209.18 3.1094 1206.58 3.81952 1204.25 4.55133C1202.82 4.5214 1202.67 3.00614 1201.3 3.05028C1200.03 2.47785 1199.84 4.31787 1198.8 4.5431C1197.53 4.5431 1196.26 4.67779 1195.03 4.50644C1193.73 4.3246 1192.93 5.55103 1191.58 5.3475C1189.54 5.04145 1187.47 5.23376 1186.04 6.93984C1184.41 5.7598 1183.04 7.15609 1181.57 6.83957C1179.99 6.49985 1178.47 6.99521 1177.34 8.1962C1174.82 8.88312 1172.7 6.85079 1170.38 7.56315C1170.04 6.871 1170.26 6.2806 1169.69 6.0434C1168.96 5.74334 1168.71 6.55223 1168.17 6.70413C1167.71 5.86755 1166.92 6.05088 1166.19 6.0419C1165.33 6.03218 1164.47 6.03966 1163.74 6.03966C1162.91 5.20608 1162.2 4.4982 1161.69 3.98488C1160.67 3.55088 1159.64 4.22508 1159.01 3.50224C1157.97 2.32371 1156.63 4.23855 1155.68 3.04654C1152.51 4.29243 1149.36 4.18019 1146.15 3.09294C1145.55 2.88866 1144.76 2.9575 1144 3.24559C1141.66 4.14277 1139.26 4.84166 1136.4 4.46603C1136.05 4.98982 1135.63 5.60416 1135.39 5.95436C1133.8 6.04565 1132.53 5.93041 1131.35 6.21775C1124.37 7.92308 1120.23 8.75816 1115.59 8.28973C1115.21 8.25232 1114.75 8.14307 1114.47 8.30769C1112.63 9.40093 1110.47 9.57902 1108.49 10.1118C1106.36 10.6835 1104.69 11.859 1102.79 12.7053C1102.07 13.0293 1101.68 13.6145 1101.05 13.9355C1098.34 15.3378 1095.04 14.7317 1092.41 16.437C1089.76 14.9187 1086.84 16.2956 1084.11 15.6431C1083.67 15.2023 1083.23 14.7616 1082.73 14.2707C1080.29 14.2707 1077.8 14.1996 1075.31 14.2902C1072.79 14.3822 1071.02 12.507 1068.69 11.9077C1068.04 12.4951 1067.43 13.051 1066.55 13.8412C1066.02 12.6544 1064.6 13.0645 1064 12.0641C1060.34 11.8688 1056.78 11.8815 1053.57 14.0926C1052.87 14.579 1051.66 14.5633 1050.84 13.8562C1050.05 13.185 1048.87 13.268 1048.4 13.6033C1047.26 14.4361 1046.07 14.3732 1044.91 14.2243C1043.6 14.056 1042.62 15.1634 1041.47 14.9749C1039.33 14.6239 1037.39 15.548 1035.43 15.9401C1034.05 16.2177 1032.48 16.2716 1031.05 17.0536C1029.36 17.9777 1027.3 18.6025 1025.39 18.6571C1023.27 18.7177 1021.06 19.4279 1018.88 18.1191C1018.13 17.6642 1016.53 17.528 1015.4 18.5239C1014.74 19.1009 1013.76 18.7402 1012.91 18.6975C1012.47 18.2553 1012.03 17.8138 1011.58 17.3723C1010.6 16.9705 1009.3 17.8011 1008.54 16.5799C1005.61 16.1579 1002.82 14.9906 999.811 15.0003C998.995 15.0033 998.221 15.1088 997.37 14.5281C996.334 13.8218 995.164 14.3254 994.028 14.9681C992.796 15.6648 991.726 13.5239 990.311 14.4361C990.106 14.5693 989.979 14.8978 989.773 14.9419C987.661 15.3902 985.514 16.2372 983.426 16.1182C979.964 15.9207 976.506 15.3572 973.04 15.0287C968.654 14.6127 964.176 15.8309 959.842 14.2909C959.398 14.133 958.657 14.0575 958.382 14.3059C957.027 15.5278 955.223 15.1208 953.678 15.6483C952.113 16.1841 950.219 15.7665 948.469 15.7665C947.341 15.4433 946.689 14.1854 945.339 14.2558C944.092 14.3209 942.729 13.9594 941.617 14.35C940.294 14.814 939.275 12.3626 938.047 14.1802C936.97 12.614 935.977 14.2468 934.958 14.3134C930.801 14.5858 926.787 13.7941 922.899 12.5684C921.951 12.2706 921.049 11.9608 920.139 12.0611C918.147 12.2811 916.293 11.6989 914.546 11.0292C912.841 10.3752 911.391 10.4365 909.697 10.9843C903.812 12.8857 904.631 13.4117 898.243 11.4527C895.928 10.7426 893.772 9.21461 890.844 9.88357C890.556 9.29318 890.29 8.74918 890.08 8.32191C888.538 9.38821 887.112 9.3029 885.799 8.58081C884.819 8.04205 883.605 8.01961 882.967 8.37279C881.251 9.32011 879.409 8.77612 877.725 9.15175C877.341 11.3345 875.59 11.865 874.03 11.9398C872.07 12.0326 870.261 12.433 868.539 13.2389C868.049 13.4678 867.62 13.5254 867.154 13.5105C865.277 13.4491 864.102 14.686 862.835 15.765C861.16 15.8301 859.408 15.3819 857.741 16.8261C857.387 15.453 856.413 15.8503 855.581 15.7546C854.639 15.6453 853.421 16.4303 853.049 16.1908C852.064 15.5555 851.134 15.8653 850.198 15.7845C849.206 15.6992 848.198 15.7231 847.2 15.774C844.885 15.8915 842.746 14.5573 840.4 14.9786C839.317 13.702 837.661 13.9684 836.609 14.371C834.315 15.248 832.038 14.8798 829.754 15.0183C829.271 15.0474 828.759 15.0108 828.312 15.1597C825.814 15.9918 823.273 16.6488 820.624 16.4931C817.06 16.2836 813.635 17.8004 810.059 17.2534C809.575 17.1793 809.454 17.7188 809.148 17.7667C807.006 18.0989 805.28 19.3351 802.927 20.4036C801.153 19.7549 798.18 18.726 797.527 18.1603C795.447 16.9832 793.531 19.7227 791.462 18.2254C789.85 19.5506 787.605 17.9882 785.94 19.4443C785.608 19.7347 784.609 19.5311 783.852 19.2498C781.397 18.3384 778.842 18.5441 776.328 19.1143C774.851 19.4496 773.394 19.8708 771.929 20.2525C770.385 18.6407 768.843 20.1432 767.3 20.2525C764.834 18.7903 762.123 18.5621 759.466 18.7709C758.454 17.8295 757.47 17.7008 756.211 17.6672C755.069 17.6365 753.718 16.8919 752.711 16.327C751.348 15.5623 750.066 16.107 748.835 15.6775C748.1 14.8245 746.992 14.7047 746.059 14.2101C745.749 14.481 745.475 14.7204 745.201 14.9599C744.769 14.8267 744.651 14.1413 743.656 14.3471C741.794 16.1384 738.879 16.2896 736.125 17.3192C735.71 16.7932 735.251 16.2118 734.891 15.7553C733.406 15.7553 731.749 16.2454 731.01 15.6333C730.053 14.8387 728.709 15.545 728.082 14.4331C727.301 15.0415 726.396 15.0572 725.461 15.025C724.337 14.9868 723.212 15.0198 722.087 15.0145C721.616 15.0123 721.563 15.8152 720.817 15.5338C720.691 15.5151 720.674 14.8042 720.194 15.23C719.747 15.8526 720.446 16.7558 719.366 17.4359C715.745 16.0165 711.807 14.9292 707.588 14.457C706.542 15.5959 705.055 14.7609 703.664 15.0751C703.16 14.4159 702.784 13.9235 702.393 13.4102C699.705 14.1705 697.388 12.2332 694.864 12.8176C694.623 12.2347 694.447 11.8089 694.269 11.3824C693.8 11.2103 693.362 11.1586 693.085 11.6832C693.379 12.0588 693.9 12.293 693.749 13.0593C693.614 13.2209 693.384 13.4888 693.164 13.7656C692.387 14.7384 691.029 13.7709 690.441 14.3523C689.432 15.3505 688.323 15.0632 687.314 14.9509C686.36 14.8454 685.552 15.8638 684.806 15.34C683.686 14.5551 682.678 15.8017 681.985 15.4807C679.079 14.1315 676.696 15.6461 673.901 16.6113C673.875 15.337 672.689 15.7785 671.979 15.4627C670.509 14.8095 668.824 14.6374 667.227 14.2677C665.239 15.8668 662.918 14.6277 660.787 15.0138C660.015 15.1537 659.795 13.7634 658.852 14.3171C658.422 14.7466 657.98 15.1874 657.367 15.7987C654.687 15.4448 651.775 16.4071 648.977 15.1896C648.535 15.6296 648.093 16.0703 647.584 16.5777C647.024 15.2974 645.648 15.4725 645.008 15.8444C643.244 16.8665 641.428 16.3173 639.648 16.5216C637.502 16.7692 635.238 15.8646 633.184 17.2242C632.871 17.4315 632.015 17.3536 631.805 17.0917C631.102 16.2192 630.189 16.4475 629.397 16.544C627.356 16.7947 625.665 16.0224 624.135 14.9861C623.216 15.1821 622.596 15.7127 621.712 15.8436C620.339 16.0471 619.102 14.9644 617.769 15.6386C616.853 14.3643 615.188 15.6116 614.188 14.5715C613.58 13.94 612.728 14.1862 612.078 14.3186C611.178 14.5019 610.447 15.2974 609.374 15.0295C608.56 14.8267 607.633 15.3288 606.873 14.7332C606.205 14.2101 605.447 14.8589 604.625 14.3665C603.886 13.9228 602.581 14.0335 601.706 14.9315C601.236 14.4159 600.821 13.9594 600.422 13.5202C600.109 13.7888 599.796 14.2632 599.558 14.2281C597.893 13.9826 596.199 14.7459 594.505 13.7469C593.548 13.182 592.099 13.1206 591.037 13.9153C590.322 14.4496 589.687 14.2513 588.992 14.1241C588.83 13.6811 588.672 13.2493 588.474 12.7061C586.449 13.1244 584.296 12.0828 582.413 13.384C580.397 11.7236 577.667 13.7043 575.473 12.1157C574.66 11.5283 573.06 12.0207 572.023 12.0207C570.882 12.8168 569.969 13.5359 568.663 13.5382C567.727 13.5389 566.638 13.1266 565.947 14.2026C565.005 12.7921 564.138 13.9587 563.212 14.2415C562.755 14.3815 562.143 14.4301 561.731 14.2393C558.448 12.7233 554.789 12.9597 551.417 11.9668C549.901 11.5193 548.492 11.0329 546.991 11.3921C545.474 13.2389 543.127 13.1872 541.304 14.2213C540.278 14.802 539.285 13.7701 538.205 13.4536C537.542 14.3732 536.336 14.3463 535.495 15.0617C533.382 13.2942 531.587 14.6763 529.755 15.6438C529.122 14.7586 528.128 14.7137 527.489 15.2345C526.439 16.0905 525.436 15.8092 524.409 15.5271C521.93 14.8469 518.389 15.144 515.833 15.4605C512.487 15.875 509.159 17.7158 505.655 15.8092C504.557 15.2113 503.346 16.0666 502.373 16.5994C501.735 16.229 501.427 15.6491 500.674 15.7388C499.812 15.8406 498.926 15.7254 498.053 15.7733C497.27 15.8159 497.009 14.7616 496.107 14.9883C495.273 15.1978 494.426 15.0661 493.819 14.3164C493.298 14.8664 492.717 15.4987 492.028 14.6396C491.385 13.8382 490.323 14.7077 489.691 13.8771C489.254 13.3025 488.277 14.7421 487.857 13.5292C486.793 14.8529 485.325 14.1443 484.036 14.2423C482.669 14.3463 481.049 14.7182 479.972 14.1532C478.563 13.4147 477.573 14.3747 476.41 14.3875C475.278 14.4002 474.713 13.4222 473.736 13.5007C472.737 14.5341 471.446 14.6703 470.415 13.9759C469.207 13.161 467.826 13.2471 466.881 13.6175C464.873 14.4039 462.645 13.8337 461.008 15.0676C460.496 14.6621 460.217 14.4398 459.742 14.0635C459.12 14.4945 458.409 14.8686 457.605 15.0908C454.967 15.8219 452.311 15.8541 449.646 15.7239C448.589 15.673 447.792 16.0494 446.983 16.5238C445.538 15.8548 444.165 15.7852 442.976 15.6019C441.413 15.3617 439.909 14.7377 438.373 14.276C438.117 14.5087 437.851 14.7496 437.585 14.9906C436.873 14.2805 436.166 13.5748 435.359 12.7697C434.974 12.7697 434.487 12.7689 434.001 12.7697C433.545 12.7704 433.503 11.9271 432.944 12.186C432.722 12.4075 432.545 12.5841 432.368 12.7607C430.865 11.4303 430.865 11.4303 429.006 10.9267C428.977 10.4642 429.104 9.91949 428.414 9.78255C426.008 10.9753 423.461 10.5263 420.935 10.355C420.237 9.10685 419.865 10.7344 419.229 10.5488C418.448 10.3198 417.912 9.59398 416.915 9.72194C416.138 9.82146 415.606 10.2525 414.962 10.4642C414.172 10.7231 413.221 10.6116 412.36 10.5016C411.518 10.3939 411.059 11.0763 410.409 11.2387C408.675 11.6727 406.917 12.4464 405.114 11.9802C403.624 11.5949 402.631 12.953 401.291 12.7585C400.003 12.5729 399.176 11.2574 397.786 11.2709C397.426 11.2754 397.032 11.3539 396.791 10.9573C396.954 10.0587 396.204 9.68752 395.729 9.15624C394.76 8.71625 393.536 9.50644 392.629 8.40796C392.368 8.09144 391.247 8.04056 390.878 8.32715C389.014 9.76908 386.555 8.30844 384.681 9.73541C384.112 10.1687 383.332 9.59997 382.804 9.07992C379.619 10.5608 378.628 10.6453 375.016 10.5825C373.786 10.5615 372.543 11.1856 371.331 11.5088C371.155 11.969 371.352 12.5489 370.556 12.837C369.565 12.3334 368.434 11.7603 367.386 11.2282C366.701 11.4475 366.457 12.2736 365.617 11.9892C365.405 11.7984 365.133 11.556 364.725 11.1893C364.51 12.29 363.659 12.0723 362.944 12.0087C361.411 11.8717 360.093 11.0584 358.672 10.5742C357.096 10.0377 355.248 11.2125 353.678 9.91949C353.372 9.66732 352.554 10.0063 352.279 9.74813C350.676 8.24783 349.163 9.30216 347.616 9.91425C346.918 8.77237 345.887 8.57632 345.085 9.35603C343.627 10.7755 342.627 9.10012 341.436 8.95869C340.044 8.79333 338.941 10.6917 337.73 9.56555C336.718 8.62422 335.547 9.48025 334.301 8.58605C334.167 8.43116 333.768 7.97022 333.393 7.53697C332.931 7.84526 332.721 8.40272 331.994 8.25756C330.325 6.75801 328.066 5.44777 325.976 6.20877C324.253 6.83583 323.124 6.56944 321.647 6.07483C320.073 5.54804 318.46 5.15968 316.718 5.23451C315.2 5.29961 313.709 5.30335 312.097 4.69575C310.518 4.10087 308.584 4.50793 307.084 3.14457C306.703 2.79811 305.634 2.74798 305.106 3.53068C304.832 3.937 304.436 3.74544 304.27 3.76938C303.216 3.20817 302.293 2.71805 301.416 2.25187C299.538 3.26354 297.67 3.93924 295.58 3.79707C294.552 3.72673 293.534 3.77088 292.609 4.31637C291.702 3.26803 290.493 4.02679 289.452 3.79108C286.736 3.17824 284.232 4.93445 280.765 4.36576C280.741 4.3059 280.464 3.62122 280.077 2.66492C279.319 4.50419 277.967 4.38746 276.856 4.78704C274.955 5.47097 272.93 5.51586 271.001 6.03667C268.586 4.73915 265.994 5.5009 263.604 5.2622C262.771 6.09353 262.064 6.79916 261.327 7.53472C259.219 7.54819 256.978 7.16507 255.316 9.01781C254.824 8.52694 254.382 8.0862 253.807 7.51302C251.424 7.74125 248.836 6.98249 246.422 8.27926C244.828 7.46887 244.857 7.54819 243.557 8.01137C242.683 8.32266 242.02 9.10236 240.978 9.04026C238.885 8.91529 236.761 9.29093 234.704 8.64068C234.648 9.00584 234.859 9.42188 234.083 9.86262C232.502 8.90033 230.98 10.6214 229.184 10.5353C228.409 10.1372 228.114 9.14277 226.939 8.98264C225.577 10.3288 223.912 10.4388 221.945 9.8252C219.482 9.05597 217.266 11.5964 214.694 10.6506C213.704 11.8276 212.108 10.7209 211.261 11.3524C209.876 12.3851 208.867 10.6491 207.699 11.2739C206.464 10.1911 204.939 10.6348 203.65 10.5129C202.136 9.37474 200.73 8.35109 199.246 9.35154C198.548 9.65684 198.616 8.78884 198.047 9.28943C197.916 9.42412 197.742 9.60147 197.565 9.78255C197.14 9.34107 196.774 8.77911 195.444 9.31562C195.387 9.41365 195.033 10.0272 194.678 10.6401C194.678 10.3625 194.678 10.0856 194.678 9.80799C190.662 10.1634 187.289 9.04026 184.88 6.10251C183.042 6.77821 183.042 6.77821 181.479 6.03592C179.435 7.19425 177.393 7.17704 175.35 6.03667C174.324 6.56794 173.298 7.09922 172.802 7.35588C170.152 6.81114 167.98 6.37788 166.221 5.17166C165.666 5.59892 165.45 6.14217 164.856 6.03816C163.815 5.4994 162.788 4.96812 161.954 4.53637C159.688 5.8481 157.483 5.02424 155.491 5.32131C154.893 4.66956 154.474 4.21236 153.918 3.607C152.612 4.36651 151.506 3.27552 150.427 2.98743C149.996 3.33613 149.744 3.53891 149.5 3.73646C148.995 3.23286 148.554 2.79138 148.096 2.33568C146.431 4.08441 144.79 2.3716 142.858 2.21895C141.117 4.77881 138.009 5.11778 135.274 5.91769C133.148 6.54026 130.677 5.70518 128.488 6.76998C128.296 6.86351 127.891 6.85678 127.78 6.72882C126.836 5.64232 125.234 6.20802 124.418 5.17465C123.888 5.51137 123.537 5.73586 123.209 5.94388C122.948 5.68348 122.771 5.50763 122.576 5.31308C122.059 5.79497 121.542 6.27686 120.737 7.02664C120.373 6.39883 120.018 5.78599 119.707 5.24798C118.631 5.89973 118.556 6.82311 118.055 7.23017C115.394 9.15325 112.203 7.46812 109.555 8.62272C106.448 9.97785 103.653 7.77791 100.562 8.36307C99.9402 10.4313 97.0309 9.21535 96.4119 11.2799C95.5274 11.2799 94.7794 11.2799 94.0029 11.2799C93.1184 12.6432 91.2909 12.855 90.3291 14.2707C89.0859 14.056 87.7423 14.7399 86.5149 13.6003C86.1105 13.2246 84.7421 13.2074 84.3895 13.5748C83.1486 14.8656 81.4343 14.1106 80.0007 14.8738C78.7425 15.5435 76.8429 15.0138 75.2832 15.0138C74.1391 13.714 72.4639 13.7784 71.1105 13.1184C69.616 12.3896 67.8732 12.8625 66.2805 12.0962C64.9458 11.4542 63.0935 12.7143 61.7633 11.3008C61.3935 11.5904 61.1737 12.1284 60.1001 11.9376C59.9253 11.639 59.5479 10.9955 59.4489 10.8264C57.6626 10.1911 56.2979 10.9379 55.03 9.91724C54.4201 9.42562 52.8079 9.3927 52.1837 9.86112C50.897 10.8264 49.5991 10.447 48.305 10.5054C46.5585 10.584 44.8059 10.5248 43.0556 10.5241C41.766 11.8022 40.1935 12.1127 38.426 12.0424C36.1903 11.9541 33.9471 12.0214 31.7827 12.0214C31.2658 12.5362 30.8239 12.9777 30.382 13.4184C30.0084 13.188 29.6348 12.9575 28.9588 12.5392C28.6678 14.3358 27.1328 13.06 26.285 13.7477C26.0652 14.1735 26.294 14.7668 26.0314 14.8776C23.4334 15.1215 21.2772 15.6191 19.9028 16.9787C16.1854 18.0653 13.0495 16.0307 9.72372 16.5126C6.36269 16.9982 3.271 15.3153 0 15.0317C0 17.1553 0 18.9901 0 21C255.833 21 511.568 21 767.303 21C778.177 21 789.05 20.9484 799.923 20.9888C802.821 21 804.02 20.9491 804.087 20.8481C1016.56 20.8481 1228.29 20.8481 1440 20.8481C1440 15.8683 1440 10.9529 1440 5.98204C1436.92 8.1745 1433.18 8.0862 1430.01 9.63589Z" fill="#FFFFFF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_68_181">
                                <rect width="1440" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default Header;