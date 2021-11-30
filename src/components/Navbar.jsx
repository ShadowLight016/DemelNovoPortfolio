import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand abs" href="#">
                    <svg width="92" height="28" viewBox="0 0 92 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="portfolio-text-splitted">
                            <path id="nav-brand-name-p" d="M4.23047 15.3203V22H1.98047V4.9375H8.27344C10.1406 4.9375 11.6016 5.41406 12.6562 6.36719C13.7188 7.32031 14.25 8.58203 14.25 10.1523C14.25 11.8086 13.7305 13.0859 12.6914 13.9844C11.6602 14.875 10.1797 15.3203 8.25 15.3203H4.23047ZM4.23047 13.4805H8.27344C9.47656 13.4805 10.3984 13.1992 11.0391 12.6367C11.6797 12.0664 12 11.2461 12 10.1758C12 9.16016 11.6797 8.34766 11.0391 7.73828C10.3984 7.12891 9.51953 6.8125 8.40234 6.78906H4.23047V13.4805Z"/>
                            <path id="nav-brand-name-o1" d="M16.0664 15.543C16.0664 14.3008 16.3086 13.1836 16.793 12.1914C17.2852 11.1992 17.9648 10.4336 18.832 9.89453C19.707 9.35547 20.7031 9.08594 21.8203 9.08594C23.5469 9.08594 24.9414 9.68359 26.0039 10.8789C27.0742 12.0742 27.6094 13.6641 27.6094 15.6484V15.8008C27.6094 17.0352 27.3711 18.1445 26.8945 19.1289C26.4258 20.1055 25.75 20.8672 24.8672 21.4141C23.9922 21.9609 22.9844 22.2344 21.8438 22.2344C20.125 22.2344 18.7305 21.6367 17.6602 20.4414C16.5977 19.2461 16.0664 17.6641 16.0664 15.6953V15.543ZM18.2461 15.8008C18.2461 17.207 18.5703 18.3359 19.2188 19.1875C19.875 20.0391 20.75 20.4648 21.8438 20.4648C22.9453 20.4648 23.8203 20.0352 24.4688 19.1758C25.1172 18.3086 25.4414 17.0977 25.4414 15.543C25.4414 14.1523 25.1094 13.0273 24.4453 12.168C23.7891 11.3008 22.9141 10.8672 21.8203 10.8672C20.75 10.8672 19.8867 11.293 19.2305 12.1445C18.5742 12.9961 18.2461 14.2148 18.2461 15.8008Z"/>
                            <path id="nav-brand-name-r" d="M35.7695 11.2656C35.4414 11.2109 35.0859 11.1836 34.7031 11.1836C33.2812 11.1836 32.3164 11.7891 31.8086 13V22H29.6406V9.32031H31.75L31.7852 10.7852C32.4961 9.65234 33.5039 9.08594 34.8086 9.08594C35.2305 9.08594 35.5508 9.14062 35.7695 9.25V11.2656Z"/>
                            <path id="nav-brand-name-t" d="M41.582 6.25V9.32031H43.9492V10.9961H41.582V18.8594C41.582 19.3672 41.6875 19.75 41.8984 20.0078C42.1094 20.2578 42.4688 20.3828 42.9766 20.3828C43.2266 20.3828 43.5703 20.3359 44.0078 20.2422V22C43.4375 22.1562 42.8828 22.2344 42.3438 22.2344C41.375 22.2344 40.6445 21.9414 40.1523 21.3555C39.6602 20.7695 39.4141 19.9375 39.4141 18.8594V10.9961H37.1055V9.32031H39.4141V6.25H41.582Z"/>
                            <path id="nav-brand-name-f" d="M47.707 22V10.9961H45.7031V9.32031H47.707V8.01953C47.707 6.66016 48.0703 5.60937 48.7969 4.86719C49.5234 4.125 50.5508 3.75391 51.8789 3.75391C52.3789 3.75391 52.875 3.82031 53.3672 3.95312L53.25 5.71094C52.8828 5.64062 52.4922 5.60547 52.0781 5.60547C51.375 5.60547 50.832 5.8125 50.4492 6.22656C50.0664 6.63281 49.875 7.21875 49.875 7.98438V9.32031H52.582V10.9961H49.875V22H47.707Z"/>
                            <path id="nav-brand-name-o2" d="M55.0664 15.543C55.0664 14.3008 55.3086 13.1836 55.793 12.1914C56.2852 11.1992 56.9648 10.4336 57.832 9.89453C58.707 9.35547 59.7031 9.08594 60.8203 9.08594C62.5469 9.08594 63.9414 9.68359 65.0039 10.8789C66.0742 12.0742 66.6094 13.6641 66.6094 15.6484V15.8008C66.6094 17.0352 66.3711 18.1445 65.8945 19.1289C65.4258 20.1055 64.75 20.8672 63.8672 21.4141C62.9922 21.9609 61.9844 22.2344 60.8438 22.2344C59.125 22.2344 57.7305 21.6367 56.6602 20.4414C55.5977 19.2461 55.0664 17.6641 55.0664 15.6953V15.543ZM57.2461 15.8008C57.2461 17.207 57.5703 18.3359 58.2188 19.1875C58.875 20.0391 59.75 20.4648 60.8438 20.4648C61.9453 20.4648 62.8203 20.0352 63.4688 19.1758C64.1172 18.3086 64.4414 17.0977 64.4414 15.543C64.4414 14.1523 64.1094 13.0273 63.4453 12.168C62.7891 11.3008 61.9141 10.8672 60.8203 10.8672C59.75 10.8672 58.8867 11.293 58.2305 12.1445C57.5742 12.9961 57.2461 14.2148 57.2461 15.8008Z"/>
                            <path id="nav-brand-name-l" d="M70.9961 22H68.8281V4H70.9961V22Z"/>
                            <path id="nav-brand-name-i" d="M76.9961 22H74.8281V9.32031H76.9961V22ZM74.6523 5.95703C74.6523 5.60547 74.7578 5.30859 74.9688 5.06641C75.1875 4.82422 75.5078 4.70312 75.9297 4.70312C76.3516 4.70312 76.6719 4.82422 76.8906 5.06641C77.1094 5.30859 77.2188 5.60547 77.2188 5.95703C77.2188 6.30859 77.1094 6.60156 76.8906 6.83594C76.6719 7.07031 76.3516 7.1875 75.9297 7.1875C75.5078 7.1875 75.1875 7.07031 74.9688 6.83594C74.7578 6.60156 74.6523 6.30859 74.6523 5.95703Z"/>
                            <path id="nav-brand-name-o3" d="M80.0664 15.543C80.0664 14.3008 80.3086 13.1836 80.793 12.1914C81.2852 11.1992 81.9648 10.4336 82.832 9.89453C83.707 9.35547 84.7031 9.08594 85.8203 9.08594C87.5469 9.08594 88.9414 9.68359 90.0039 10.8789C91.0742 12.0742 91.6094 13.6641 91.6094 15.6484V15.8008C91.6094 17.0352 91.3711 18.1445 90.8945 19.1289C90.4258 20.1055 89.75 20.8672 88.8672 21.4141C87.9922 21.9609 86.9844 22.2344 85.8438 22.2344C84.125 22.2344 82.7305 21.6367 81.6602 20.4414C80.5977 19.2461 80.0664 17.6641 80.0664 15.6953V15.543ZM82.2461 15.8008C82.2461 17.207 82.5703 18.3359 83.2188 19.1875C83.875 20.0391 84.75 20.4648 85.8438 20.4648C86.9453 20.4648 87.8203 20.0352 88.4688 19.1758C89.1172 18.3086 89.4414 17.0977 89.4414 15.543C89.4414 14.1523 89.1094 13.0273 88.4453 12.168C87.7891 11.3008 86.9141 10.8672 85.8203 10.8672C84.75 10.8672 83.8867 11.293 83.2305 12.1445C82.5742 12.9961 82.2461 14.2148 82.2461 15.8008Z"/>
                        </g>
                    </svg>    
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active d-flex justify-content-absolute" aria-current="page" href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="navbar-icons active" d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/>
                                </svg>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Me</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {/* <li className="nav-item">
                            <a href="#" className="nav-link">
                                <svg width="74" height="24" viewBox="0 0 74 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="4-web-services">
                                        <g id="web-services">
                                            <g id="services-strikethrough">
                                                <path id="line" d="M21.5979 19.6728H69.5055" stroke="black" stroke-width="1.25" stroke-linecap="round"/>
                                                <path id="services" d="M20.2982 23.4737C19.2349 23.4737 18.3617 23.223 17.6788 22.7216C16.9958 22.2115 16.6284 21.4853 16.5765 20.543H19.2867C19.3127 20.8629 19.4078 21.0963 19.572 21.2433C19.7363 21.3902 19.9481 21.4637 20.2074 21.4637C20.4409 21.4637 20.631 21.4075 20.778 21.2951C20.9336 21.1741 21.0114 21.0098 21.0114 20.8024C21.0114 20.5344 20.8861 20.3269 20.6354 20.1799C20.3847 20.033 19.9783 19.8687 19.4164 19.6872C18.8199 19.4883 18.3358 19.2981 17.9641 19.1166C17.601 18.9264 17.2811 18.6541 17.0045 18.2996C16.7365 17.9366 16.6025 17.4654 16.6025 16.8862C16.6025 16.2983 16.7494 15.7969 17.0434 15.382C17.3373 14.9584 17.7436 14.6385 18.2623 14.4224C18.781 14.2062 19.3689 14.0982 20.0259 14.0982C21.0892 14.0982 21.9364 14.3489 22.5675 14.8503C23.2072 15.3431 23.5487 16.039 23.5919 16.9381H20.8299C20.8212 16.6614 20.7348 16.4539 20.5705 16.3156C20.4149 16.1773 20.2118 16.1081 19.9611 16.1081C19.7709 16.1081 19.6153 16.1643 19.4942 16.2767C19.3732 16.3891 19.3127 16.549 19.3127 16.7565C19.3127 16.9294 19.3775 17.0807 19.5072 17.2104C19.6455 17.3314 19.8141 17.4395 20.0129 17.5346C20.2118 17.621 20.5057 17.7334 20.8947 17.8717C21.4739 18.0706 21.9494 18.2694 22.3211 18.4682C22.7015 18.6584 23.0257 18.9307 23.2937 19.2852C23.5703 19.631 23.7087 20.0719 23.7087 20.6079C23.7087 21.1525 23.5703 21.6409 23.2937 22.0732C23.0257 22.5054 22.6324 22.8469 22.1137 23.0976C21.6036 23.3483 20.9985 23.4737 20.2982 23.4737ZM31.8408 19.6612C31.8408 19.8601 31.8278 20.0589 31.8019 20.2577H26.9909C27.0169 20.6554 27.1249 20.9537 27.3151 21.1525C27.514 21.3427 27.7647 21.4378 28.0672 21.4378C28.4909 21.4378 28.7934 21.2476 28.975 20.8672H31.6852C31.5728 21.3686 31.3523 21.8182 31.0238 22.2158C30.704 22.6049 30.2977 22.9117 29.8049 23.1365C29.3121 23.3613 28.7675 23.4737 28.171 23.4737C27.4535 23.4737 26.8137 23.3224 26.2518 23.0198C25.6985 22.7172 25.2619 22.285 24.9421 21.7231C24.6309 21.1611 24.4753 20.4998 24.4753 19.739C24.4753 18.9783 24.6309 18.3213 24.9421 17.768C25.2533 17.2061 25.6856 16.7738 26.2388 16.4712C26.8008 16.1687 27.4448 16.0174 28.171 16.0174C28.8885 16.0174 29.5239 16.1643 30.0772 16.4583C30.6305 16.7522 31.0627 17.1758 31.374 17.7291C31.6852 18.2737 31.8408 18.9178 31.8408 19.6612ZM29.2473 19.0258C29.2473 18.7146 29.1435 18.4725 28.9361 18.2996C28.7286 18.1181 28.4692 18.0273 28.158 18.0273C27.8468 18.0273 27.5918 18.1138 27.3929 18.2867C27.1941 18.4509 27.0644 18.6973 27.0039 19.0258H29.2473ZM35.4225 17.3919C35.7078 16.977 36.0536 16.6484 36.4599 16.4064C36.8662 16.1643 37.3028 16.0433 37.7697 16.0433V18.7535H37.0564C36.5032 18.7535 36.0925 18.8616 35.8245 19.0777C35.5565 19.2938 35.4225 19.6699 35.4225 20.2059V23.3829H32.8809V16.1081H35.4225V17.3919ZM42.1691 20.9839L43.5308 16.1081H46.241L43.7382 23.3829H40.5741L38.0714 16.1081H40.7816L42.1691 20.9839ZM48.3858 15.4338C47.9362 15.4338 47.5732 15.3128 47.2965 15.0707C47.0285 14.82 46.8945 14.5088 46.8945 14.1371C46.8945 13.7567 47.0285 13.4412 47.2965 13.1904C47.5732 12.9397 47.9362 12.8144 48.3858 12.8144C48.8267 12.8144 49.1811 12.9397 49.4491 13.1904C49.7258 13.4412 49.8641 13.7567 49.8641 14.1371C49.8641 14.5088 49.7258 14.82 49.4491 15.0707C49.1811 15.3128 48.8267 15.4338 48.3858 15.4338ZM49.6436 16.1081V23.3829H47.102V16.1081H49.6436ZM50.6763 19.739C50.6763 18.9869 50.8319 18.3299 51.1431 17.768C51.4543 17.2061 51.8866 16.7738 52.4399 16.4712C53.0018 16.1687 53.6415 16.0174 54.359 16.0174C55.2841 16.0174 56.0621 16.2724 56.6932 16.7824C57.3243 17.2839 57.7306 17.9884 57.9121 18.8961H55.2149C55.0593 18.4207 54.7567 18.1829 54.3072 18.1829C53.9873 18.1829 53.7323 18.3169 53.5421 18.5849C53.3605 18.8443 53.2698 19.229 53.2698 19.739C53.2698 20.2491 53.3605 20.6381 53.5421 20.9061C53.7323 21.1741 53.9873 21.3081 54.3072 21.3081C54.7654 21.3081 55.0679 21.0704 55.2149 20.5949H57.9121C57.7306 21.494 57.3243 22.1985 56.6932 22.7086C56.0621 23.2186 55.2841 23.4737 54.359 23.4737C53.6415 23.4737 53.0018 23.3224 52.4399 23.0198C51.8866 22.7172 51.4543 22.285 51.1431 21.7231C50.8319 21.1611 50.6763 20.4998 50.6763 19.739ZM65.9183 19.6612C65.9183 19.8601 65.9053 20.0589 65.8794 20.2577H61.0684C61.0944 20.6554 61.2024 20.9537 61.3926 21.1525C61.5914 21.3427 61.8421 21.4378 62.1447 21.4378C62.5683 21.4378 62.8709 21.2476 63.0524 20.8672H65.7627C65.6503 21.3686 65.4298 21.8182 65.1013 22.2158C64.7814 22.6049 64.3751 22.9117 63.8824 23.1365C63.3896 23.3613 62.845 23.4737 62.2485 23.4737C61.5309 23.4737 60.8912 23.3224 60.3293 23.0198C59.776 22.7172 59.3394 22.285 59.0196 21.7231C58.7083 21.1611 58.5527 20.4998 58.5527 19.739C58.5527 18.9783 58.7083 18.3213 59.0196 17.768C59.3308 17.2061 59.763 16.7738 60.3163 16.4712C60.8782 16.1687 61.5223 16.0174 62.2485 16.0174C62.966 16.0174 63.6014 16.1643 64.1547 16.4583C64.708 16.7522 65.1402 17.1758 65.4514 17.7291C65.7627 18.2737 65.9183 18.9178 65.9183 19.6612ZM63.3248 19.0258C63.3248 18.7146 63.221 18.4725 63.0135 18.2996C62.8061 18.1181 62.5467 18.0273 62.2355 18.0273C61.9243 18.0273 61.6692 18.1138 61.4704 18.2867C61.2716 18.4509 61.1419 18.6973 61.0814 19.0258H63.3248ZM70.0579 23.4737C69.4009 23.4737 68.813 23.3656 68.2943 23.1495C67.7843 22.9247 67.378 22.6221 67.0754 22.2418C66.7815 21.8527 66.6172 21.4162 66.5826 20.932H69.0465C69.081 21.1655 69.1891 21.347 69.3706 21.4767C69.5522 21.6064 69.777 21.6712 70.0449 21.6712C70.2524 21.6712 70.4167 21.628 70.5377 21.5415C70.6587 21.4551 70.7193 21.3427 70.7193 21.2044C70.7193 21.0228 70.6198 20.8888 70.421 20.8024C70.2222 20.7159 69.8937 20.6208 69.4355 20.5171C68.9168 20.4133 68.4845 20.2966 68.1387 20.167C67.7929 20.0373 67.4904 19.8255 67.231 19.5316C66.9803 19.2376 66.8549 18.84 66.8549 18.3385C66.8549 17.9063 66.9717 17.5173 67.2051 17.1715C67.4385 16.817 67.78 16.5361 68.2295 16.3286C68.6877 16.1211 69.2366 16.0174 69.8764 16.0174C70.8273 16.0174 71.5751 16.2508 72.1197 16.7176C72.6644 17.1844 72.9799 17.7982 73.0664 18.559H70.7711C70.7279 18.3256 70.6242 18.1484 70.4599 18.0273C70.3043 17.8977 70.0925 17.8328 69.8245 17.8328C69.617 17.8328 69.4571 17.8717 69.3447 17.9495C69.241 18.0273 69.1891 18.1354 69.1891 18.2737C69.1891 18.4466 69.2885 18.5806 69.4873 18.6757C69.6862 18.7622 70.006 18.8529 70.4469 18.948C70.9743 19.0604 71.4109 19.1858 71.7567 19.3241C72.1111 19.4624 72.418 19.6872 72.6773 19.9984C72.9453 20.301 73.0793 20.7159 73.0793 21.2433C73.0793 21.6669 72.954 22.0472 72.7033 22.3844C72.4612 22.7216 72.1111 22.9896 71.6529 23.1884C71.2034 23.3786 70.6717 23.4737 70.0579 23.4737Z" fill="black"/>
                                            </g>
                                            <path id="web" d="M27.5643 3.43459L25.3209 12.5767H22.1958L20.9379 6.97471L19.6542 12.5767H16.529L14.3116 3.43459H17.0607L18.124 9.68492L19.5634 3.43459H22.3514L23.7519 9.63305L24.8152 3.43459H27.5643ZM35.5934 8.855C35.5934 9.05383 35.5805 9.25267 35.5545 9.4515H30.7436C30.7695 9.84917 30.8776 10.1474 31.0678 10.3463C31.2666 10.5365 31.5173 10.6315 31.8199 10.6315C32.2435 10.6315 32.5461 10.4414 32.7276 10.061H35.4378C35.3255 10.5624 35.105 11.0119 34.7765 11.4096C34.4566 11.7986 34.0503 12.1055 33.5576 12.3303C33.0648 12.5551 32.5202 12.6674 31.9236 12.6674C31.2061 12.6674 30.5664 12.5162 30.0045 12.2136C29.4512 11.911 29.0146 11.4788 28.6947 10.9168C28.3835 10.3549 28.2279 9.69356 28.2279 8.9328C28.2279 8.17205 28.3835 7.51503 28.6947 6.96175C29.006 6.39982 29.4382 5.96757 29.9915 5.665C30.5534 5.36242 31.1975 5.21114 31.9236 5.21114C32.6412 5.21114 33.2766 5.3581 33.8299 5.65203C34.3831 5.94596 34.8154 6.36956 35.1266 6.92284C35.4378 7.46748 35.5934 8.11153 35.5934 8.855ZM32.9999 8.21959C32.9999 7.90837 32.8962 7.66631 32.6887 7.49341C32.4813 7.31187 32.2219 7.2211 31.9107 7.2211C31.5995 7.2211 31.3444 7.30755 31.1456 7.48045C30.9468 7.6447 30.8171 7.89108 30.7566 8.21959H32.9999ZM39.1752 6.31337C39.374 5.96757 39.655 5.69958 40.0181 5.50939C40.3812 5.31055 40.8091 5.21114 41.3019 5.21114C41.8811 5.21114 42.4041 5.36242 42.8709 5.665C43.3462 5.96757 43.7179 6.39982 43.9859 6.96175C44.2626 7.52367 44.4009 8.18069 44.4009 8.9328C44.4009 9.68492 44.2626 10.3463 43.9859 10.9168C43.7179 11.4788 43.3462 11.911 42.8709 12.2136C42.4041 12.5162 41.8811 12.6674 41.3019 12.6674C40.8091 12.6674 40.3812 12.5723 40.0181 12.3822C39.655 12.1833 39.374 11.911 39.1752 11.5652V12.5767H36.6336V2.98073H39.1752V6.31337ZM41.8206 8.9328C41.8206 8.45733 41.6909 8.08992 41.4315 7.83057C41.1808 7.56257 40.8696 7.42858 40.4979 7.42858C40.1261 7.42858 39.8106 7.56257 39.5513 7.83057C39.3005 8.09856 39.1752 8.46598 39.1752 8.9328C39.1752 9.40828 39.3005 9.78001 39.5513 10.048C39.8106 10.316 40.1261 10.45 40.4979 10.45C40.8696 10.45 41.1808 10.316 41.4315 10.048C41.6909 9.77137 41.8206 9.39963 41.8206 8.9328Z" fill="#004AAD"/>
                                        </g>
                                        <g id="cursor-and-circle">
                                            <g id="circle">
                                                <path id="outer-circle" d="M45.3177 1.75886C45.9185 2.92018 45.4608 4.3473 44.295 4.94358C43.1288 5.53866 41.6972 5.08108 41.0951 3.91859C40.4943 2.75727 40.9518 1.33127 42.1178 0.735029C43.284 0.138741 44.7156 0.597487 45.3177 1.75886Z" fill="#FF1616"/>
                                                <path id="inner-circle" d="M44.5652 2.14363C44.9538 2.89241 44.659 3.80995 43.9077 4.19357C43.1564 4.5784 42.2334 4.28257 41.8474 3.53491C41.4591 2.78612 41.7538 1.86858 42.5049 1.4838C43.2559 1.10013 44.1783 1.3948 44.5652 2.14363Z" fill="#F4F3F3"/>
                                            </g>
                                            <path id="cursor" d="M48.4709 9.80037L51.9782 9.3555L42.8793 2.28693L42.8562 2.2673L42.8574 2.29851L43.3531 13.7674L45.7569 11.1894L47.3964 14.4134C47.3964 14.4134 47.52 14.6861 47.683 14.7381C47.8195 14.7797 48.0793 14.626 48.0793 14.626L49.9328 13.6785C49.9328 13.6785 50.2103 13.556 50.254 13.4219C50.3084 13.2601 50.1559 13.0013 50.1559 13.0013L48.4709 9.80037Z" fill="#FF914D"/>
                                        </g>
                                        <path id="4" d="M0.821045 15.7753C1.17693 14.9512 1.66393 13.9959 2.28205 12.9095C2.90017 11.8044 3.5932 10.6712 4.36117 9.50988C5.14786 8.34855 5.98137 7.20599 6.86173 6.08214C7.76081 4.95829 8.65989 3.94682 9.55897 3.04774H12.0595V15.4101H14.3634V17.5454H12.0595V22.5184H9.53087V17.5454H0.821045V15.7753ZM9.53087 6.13833C8.96895 6.73773 8.39764 7.41204 7.817 8.16126C7.25508 8.89176 6.70253 9.65974 6.15933 10.4651C5.61612 11.2706 5.10105 12.0947 4.61403 12.9376C4.14578 13.7805 3.72432 14.6047 3.3497 15.4101H9.53087V6.13833Z" fill="black"/>
                                    </g>
                                </svg>  
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link d-flex" href="https://github.com/ShadowLight016" target="_blank">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="github-logo" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                <span className="navbar-item-text align-self-center ms-2">GitHub</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex" href="#" target="_blank">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="linkedin-logo" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                                <span className="navbar-item-text align-self-center ms-2">LinkedIn</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar