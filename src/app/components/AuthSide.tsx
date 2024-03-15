import { Box, Button, Grid, Typography } from '@mui/material'
import Link from 'next/link';
import React from 'react'

const AuthSide = () => {
    return (
        <Grid
            item
            xs={4}
            container
            bgcolor="#000"
            height="100%"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Box>
                <svg width="191" height="45" viewBox="0 0 291 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.3757 0.475909C10.9746 1.33181 11.0414 3.81671 12.4855 4.58329C13.1204 4.91986 16.4053 5.1955 19.7851 5.1955H25.9307L19.4551 10.8148L10.2352 11.1105C2.30603 11.3649 0.924019 11.5512 0.358926 12.4414C-0.119642 13.195 -0.119642 13.7581 0.358926 14.5116C0.915665 15.3882 2.12461 15.5722 8.26246 15.713C12.2479 15.8041 15.5084 16.0146 15.5084 16.1803C15.5084 16.3459 14.9702 17.5271 14.3126 18.8048C11.4806 24.3075 10.5389 33.8366 12.2115 40.0674C12.6883 41.8419 13.8931 44.9355 14.8896 46.9419C15.8868 48.9488 16.7019 50.7576 16.7019 50.9617C16.7019 51.1658 14.8276 51.3326 12.5362 51.3326C8.52561 51.3326 8.35556 51.3911 7.97306 52.9036C7.33159 55.4346 8.86454 56.061 15.7716 56.0888C21.5436 56.1119 21.8533 56.1799 23.8398 57.8633L25.9057 59.6136H14.1431C3.13186 59.6136 2.30363 59.6899 1.17344 60.8102C-0.296874 62.2677 0.416219 64.1315 2.6569 64.6887C3.44695 64.885 14.247 64.9353 26.6581 64.8005C47.7754 64.571 49.4719 64.4734 53.1017 63.2833C64.4089 59.5746 72.3596 51.3213 75.1893 40.3561C76.687 34.5493 76.687 30.2598 75.1893 24.453C72.3584 13.4818 64.3743 5.19905 53.1017 1.53884C49.5709 0.392508 47.6161 0.25942 31.3215 0.0589011C19.189 -0.0907486 13.0834 0.043522 12.3757 0.475909ZM47.8512 12.9578C54.2068 14.2934 59.2151 18.2233 61.9624 24.0318C63.2853 26.8285 63.5443 28.2007 63.5443 32.4045C63.5443 36.7367 63.3086 37.9079 61.8407 40.8707C59.7152 45.162 56.17 48.6519 51.9083 50.6488C49.2397 51.8992 47.7318 52.1897 43.84 52.2033C39.6147 52.2181 38.5859 51.9915 35.0635 50.2726C30.7254 48.1556 27.7621 45.1981 25.5375 40.766C24.3906 38.4816 24.1608 37.0857 24.1608 32.4045C24.1608 25.8016 25.4259 22.5424 29.5922 18.4126C34.6661 13.3831 40.9459 11.5074 47.8512 12.9578ZM39.1111 18.047C37.0321 18.5711 33.5413 21.0743 31.8824 23.2298C30.9903 24.3897 30.3644 25.41 30.4926 25.4976C30.6203 25.5851 32.0805 26.0684 33.7376 26.5718L36.7498 27.4874L38.9589 25.5952C40.9722 23.8698 41.1673 23.4332 41.1673 20.6597C41.1673 18.9863 40.9662 17.6478 40.7198 17.6856C40.4734 17.7235 39.7495 17.8862 39.1111 18.047ZM46.5378 21.0862C46.5378 24.0324 46.727 24.6949 47.6525 24.9859C48.2659 25.1788 49.226 25.8395 49.7869 26.4535C50.7471 27.5057 50.9666 27.517 53.5946 26.6552C55.1288 26.1524 56.5818 25.5668 56.8234 25.3539C57.0657 25.1409 56.4356 23.9703 55.4235 22.7536C53.6805 20.6573 50.864 18.8633 47.8804 17.9489C46.5909 17.5537 46.5378 17.6785 46.5378 21.0862ZM41.1673 30.0385C40.5109 30.6892 39.9739 31.7539 39.9739 32.4045C39.9739 34.8599 43.6604 36.8526 45.7024 35.5011C47.1632 34.5339 47.8023 32.459 47.0659 31.0737C45.7137 28.5273 43.1461 28.0771 41.1673 30.0385ZM28.6494 32.8843C28.6625 35.6886 30.2993 40.0958 32.0334 41.9951C32.9201 42.9658 33.1003 42.8599 34.9513 40.2786C36.5833 38.0031 36.8125 37.3217 36.2784 36.3315C35.9234 35.6738 35.4543 34.4754 35.2365 33.668C34.9364 32.5554 34.0914 31.9485 31.7386 31.1559L28.6362 30.1107L28.6494 32.8843ZM55.7869 31.1133C52.9251 31.8811 52.7634 32.0366 51.8235 34.9397L50.8437 37.9664L54.822 43.1308L56.3013 40.8731C58.1297 38.083 59.2312 34.4582 58.9693 32.0987L58.7705 30.3136L55.7869 31.1133ZM38.8622 43.3225L37.0136 45.8748L38.6981 46.5668C40.8797 47.4624 45.9035 47.4914 48.5571 46.623L50.642 45.941L48.8035 43.3556C47.0313 40.8636 46.8523 40.7701 43.8383 40.7701C40.8362 40.7701 40.6381 40.8713 38.8622 43.3225Z" fill="white" />
                    <path d="M93.0429 20.5795C93.0429 16.6948 93.8903 13.2396 95.585 10.2141C97.2797 7.15112 99.6335 4.77921 102.646 3.09833C105.697 1.38009 109.143 0.520973 112.984 0.520973C117.692 0.520973 121.722 1.75362 125.073 4.21891C128.425 6.68421 130.666 10.046 131.796 14.3042H121.175C120.385 12.6607 119.255 11.4094 117.786 10.5502C116.355 9.69112 114.717 9.26156 112.871 9.26156C109.896 9.26156 107.486 10.2888 105.64 12.3432C103.795 14.3976 102.872 17.143 102.872 20.5795C102.872 24.016 103.795 26.7614 105.64 28.8158C107.486 30.8702 109.896 31.8974 112.871 31.8974C114.717 31.8974 116.355 31.4679 117.786 30.6088C119.255 29.7496 120.385 28.4983 121.175 26.8548H131.796C130.666 31.113 128.425 34.4748 125.073 36.9401C121.722 39.368 117.692 40.582 112.984 40.582C109.143 40.582 105.697 39.7416 102.646 38.0607C99.6335 36.3424 97.2797 33.9705 95.585 30.9449C93.8903 27.9193 93.0429 24.4642 93.0429 20.5795Z" fill="white" />
                    <path d="M135.791 24.6136C135.791 21.4013 136.393 18.5811 137.599 16.1532C138.841 13.7252 140.517 11.8576 142.626 10.5502C144.735 9.24288 147.089 8.58921 149.688 8.58921C151.91 8.58921 153.849 9.03744 155.506 9.93391C157.201 10.8304 158.5 12.007 159.404 13.4638V9.03744H169.064V40.3018H159.404V35.8755C158.463 37.3323 157.144 38.5089 155.45 39.4054C153.793 40.3018 151.853 40.7501 149.631 40.7501C147.07 40.7501 144.735 40.0964 142.626 38.7891C140.517 37.4443 138.841 35.558 137.599 33.1301C136.393 30.6648 135.791 27.826 135.791 24.6136ZM159.404 24.6696C159.404 22.2791 158.726 20.3927 157.37 19.0107C156.052 17.6286 154.433 16.9376 152.512 16.9376C150.591 16.9376 148.953 17.6286 147.597 19.0107C146.279 20.3554 145.62 22.223 145.62 24.6136C145.62 27.0042 146.279 28.9092 147.597 30.3286C148.953 31.7107 150.591 32.4017 152.512 32.4017C154.433 32.4017 156.052 31.7107 157.37 30.3286C158.726 28.9466 159.404 27.0602 159.404 24.6696Z" fill="white" />
                    <path d="M185.713 14.2482C186.842 12.5299 188.255 11.1852 189.949 10.2141C191.644 9.20553 193.527 8.70127 195.599 8.70127V18.8426H192.943C190.533 18.8426 188.725 19.3655 187.52 20.4114C186.315 21.4199 185.713 23.2129 185.713 25.7902V40.3018H176.053V9.03744H185.713V14.2482Z" fill="white" />
                    <path d="M229.93 24.1654C229.93 25.0619 229.874 25.9957 229.761 26.9669H207.899C208.049 28.9092 208.671 30.4033 209.763 31.4492C210.893 32.4577 212.267 32.962 213.887 32.962C216.297 32.962 217.973 31.9535 218.914 29.9364H229.196C228.669 31.9908 227.708 33.8398 226.315 35.4833C224.959 37.1269 223.245 38.4155 221.174 39.3493C219.103 40.2832 216.787 40.7501 214.226 40.7501C211.137 40.7501 208.388 40.0964 205.978 38.7891C203.568 37.4817 201.685 35.6141 200.329 33.1861C198.973 30.7582 198.295 27.9194 198.295 24.6696C198.295 21.4199 198.954 18.5811 200.272 16.1532C201.628 13.7252 203.511 11.8576 205.921 10.5502C208.332 9.24288 211.1 8.58921 214.226 8.58921C217.276 8.58921 219.988 9.22421 222.36 10.4942C224.733 11.7642 226.578 13.5758 227.897 15.9291C229.252 18.2823 229.93 21.0277 229.93 24.1654ZM220.044 21.6441C220.044 20.0005 219.479 18.6932 218.35 17.722C217.22 16.7508 215.807 16.2652 214.113 16.2652C212.493 16.2652 211.119 16.7321 209.989 17.666C208.897 18.5998 208.219 19.9258 207.955 21.6441H220.044Z" fill="white" />
                    <path d="M254.233 8.70127C257.924 8.70127 260.862 9.89656 263.046 12.2871C265.268 14.6404 266.379 17.8901 266.379 22.0363V40.3018H256.775V23.3249C256.775 21.2332 256.229 19.6083 255.137 18.4504C254.045 17.2924 252.576 16.7135 250.731 16.7135C248.885 16.7135 247.417 17.2924 246.325 18.4504C245.232 19.6083 244.686 21.2332 244.686 23.3249V40.3018H235.026V9.03744H244.686V13.1836C245.665 11.8016 246.984 10.7183 248.641 9.93391C250.298 9.11215 252.162 8.70127 254.233 8.70127Z" fill="white" />
                    <path d="M290.66 32.1776V40.3018H285.746C282.243 40.3018 279.513 39.4614 277.554 37.7805C275.596 36.0623 274.617 33.2795 274.617 29.4321V16.9936H270.775V9.03744H274.617V1.41745H284.277V9.03744H290.604V16.9936H284.277V29.5442C284.277 30.478 284.503 31.1504 284.955 31.5613C285.407 31.9721 286.16 32.1776 287.214 32.1776H290.66Z" fill="white" />
                    <path d="M130.045 64.8761L127.741 60.9541H126.215V64.8761H124.952V55.2843H128.074C128.805 55.2843 129.42 55.4082 129.92 55.6559C130.428 55.9036 130.808 56.2384 131.057 56.6605C131.307 57.0825 131.432 57.5641 131.432 58.1054C131.432 58.766 131.238 59.3486 130.849 59.8532C130.47 60.3577 129.897 60.6926 129.129 60.8578L131.557 64.8761H130.045ZM126.215 59.9495H128.074C128.759 59.9495 129.272 59.7844 129.614 59.4541C129.957 59.1146 130.128 58.6651 130.128 58.1054C130.128 57.5366 129.957 57.0963 129.614 56.7843C129.281 56.4724 128.768 56.3164 128.074 56.3164H126.215V59.9495Z" fill="#EEEEEE" />
                    <path d="M143.107 60.8165C143.107 61.055 143.093 61.3073 143.065 61.5734H136.988C137.034 62.3165 137.288 62.8991 137.751 63.3211C138.223 63.7339 138.791 63.9404 139.457 63.9404C140.003 63.9404 140.456 63.8165 140.817 63.5688C141.187 63.3119 141.446 62.9725 141.594 62.5504H142.954C142.75 63.2752 142.343 63.867 141.733 64.3257C141.122 64.7752 140.364 65 139.457 65C138.736 65 138.088 64.8394 137.515 64.5183C136.951 64.1972 136.507 63.7431 136.183 63.1559C135.859 62.5596 135.697 61.8715 135.697 61.0917C135.697 60.3119 135.855 59.6284 136.169 59.0412C136.484 58.4541 136.923 58.0045 137.487 57.6926C138.061 57.3715 138.717 57.2109 139.457 57.2109C140.179 57.2109 140.817 57.3669 141.372 57.6788C141.927 57.9908 142.353 58.422 142.649 58.9724C142.954 59.5137 143.107 60.1284 143.107 60.8165ZM141.802 60.555C141.802 60.0779 141.696 59.6697 141.483 59.3302C141.27 58.9816 140.979 58.7201 140.609 58.5458C140.248 58.3623 139.846 58.2706 139.402 58.2706C138.764 58.2706 138.218 58.4724 137.765 58.8761C137.321 59.2798 137.066 59.8394 137.002 60.555H141.802Z" fill="#EEEEEE" />
                    <path d="M151.253 57.1972C152.178 57.1972 152.927 57.477 153.501 58.0366C154.074 58.5871 154.361 59.3853 154.361 60.4311V64.8761H153.112V60.61C153.112 59.8577 152.922 59.2843 152.543 58.8898C152.164 58.4862 151.646 58.2843 150.989 58.2843C150.323 58.2843 149.791 58.4908 149.394 58.9036C149.005 59.3165 148.811 59.9174 148.811 60.7064V64.8761H147.548V57.3348H148.811V58.4082C149.061 58.0229 149.398 57.7247 149.824 57.5137C150.258 57.3027 150.735 57.1972 151.253 57.1972Z" fill="#EEEEEE" />
                    <path d="M160.738 58.3669V62.8119C160.738 63.1789 160.817 63.4403 160.974 63.5963C161.132 63.7431 161.404 63.8165 161.793 63.8165H162.723V64.8761H161.585C160.882 64.8761 160.355 64.7156 160.003 64.3945C159.652 64.0734 159.476 63.5459 159.476 62.8119V58.3669H158.491V57.3348H159.476V55.4357H160.738V57.3348H162.723V58.3669H160.738Z" fill="#EEEEEE" />
                    <path d="M173.03 61.0779C173.03 60.3073 173.187 59.633 173.501 59.055C173.816 58.4678 174.246 58.0137 174.792 57.6926C175.347 57.3715 175.962 57.2109 176.637 57.2109C177.303 57.2109 177.881 57.3531 178.372 57.6375C178.862 57.9219 179.227 58.2798 179.468 58.7109V57.3348H180.744V64.8761H179.468V63.4725C179.218 63.9128 178.843 64.2798 178.344 64.5734C177.854 64.8578 177.28 65 176.623 65C175.948 65 175.338 64.8349 174.792 64.5046C174.246 64.1743 173.816 63.711 173.501 63.1147C173.187 62.5183 173.03 61.8394 173.03 61.0779ZM179.468 61.0917C179.468 60.5229 179.352 60.0275 179.121 59.6054C178.89 59.1834 178.575 58.8623 178.177 58.6421C177.789 58.4128 177.359 58.2981 176.887 58.2981C176.415 58.2981 175.985 58.4082 175.597 58.6284C175.208 58.8486 174.898 59.1697 174.667 59.5917C174.436 60.0137 174.32 60.5091 174.32 61.0779C174.32 61.6559 174.436 62.1605 174.667 62.5917C174.898 63.0137 175.208 63.3394 175.597 63.5688C175.985 63.789 176.415 63.8991 176.887 63.8991C177.359 63.8991 177.789 63.789 178.177 63.5688C178.575 63.3394 178.89 63.0137 179.121 62.5917C179.352 62.1605 179.468 61.6605 179.468 61.0917Z" fill="#EEEEEE" />
                    <path d="M189.358 57.1972C190.283 57.1972 191.032 57.477 191.605 58.0366C192.179 58.5871 192.466 59.3853 192.466 60.4311V64.8761H191.217V60.61C191.217 59.8577 191.027 59.2843 190.648 58.8898C190.269 58.4862 189.751 58.2843 189.094 58.2843C188.428 58.2843 187.896 58.4908 187.498 58.9036C187.11 59.3165 186.916 59.9174 186.916 60.7064V64.8761H185.653V57.3348H186.916V58.4082C187.165 58.0229 187.503 57.7247 187.928 57.5137C188.363 57.3027 188.84 57.1972 189.358 57.1972Z" fill="#EEEEEE" />
                    <path d="M196.831 61.0779C196.831 60.3073 196.989 59.633 197.303 59.055C197.618 58.4678 198.048 58.0137 198.593 57.6926C199.148 57.3715 199.768 57.2109 200.453 57.2109C201.045 57.2109 201.595 57.3485 202.104 57.6238C202.613 57.8898 203.001 58.2431 203.269 58.6834V54.6926H204.546V64.8761H203.269V63.4587C203.02 63.9082 202.65 64.2798 202.159 64.5734C201.669 64.8578 201.096 65 200.439 65C199.764 65 199.148 64.8349 198.593 64.5046C198.048 64.1743 197.618 63.711 197.303 63.1147C196.989 62.5183 196.831 61.8394 196.831 61.0779ZM203.269 61.0917C203.269 60.5229 203.154 60.0275 202.922 59.6054C202.691 59.1834 202.377 58.8623 201.979 58.6421C201.59 58.4128 201.16 58.2981 200.689 58.2981C200.217 58.2981 199.787 58.4082 199.398 58.6284C199.01 58.8486 198.7 59.1697 198.469 59.5917C198.237 60.0137 198.122 60.5091 198.122 61.0779C198.122 61.6559 198.237 62.1605 198.469 62.5917C198.7 63.0137 199.01 63.3394 199.398 63.5688C199.787 63.789 200.217 63.8991 200.689 63.8991C201.16 63.8991 201.59 63.789 201.979 63.5688C202.377 63.3394 202.691 63.0137 202.922 62.5917C203.154 62.1605 203.269 61.6605 203.269 61.0917Z" fill="#EEEEEE" />
                    <path d="M218.94 55.2843C219.994 55.2843 220.905 55.4816 221.673 55.8761C222.45 56.2614 223.042 56.8164 223.449 57.5412C223.865 58.266 224.073 59.1192 224.073 60.1009C224.073 61.0825 223.865 61.9357 223.449 62.6605C223.042 63.3761 222.45 63.9266 221.673 64.3119C220.905 64.6881 219.994 64.8761 218.94 64.8761H215.929V55.2843H218.94ZM218.94 63.844C220.188 63.844 221.141 63.5183 221.798 62.867C222.455 62.2064 222.783 61.2844 222.783 60.1009C222.783 58.9082 222.45 57.977 221.784 57.3073C221.127 56.6375 220.179 56.3027 218.94 56.3027H217.191V63.844H218.94Z" fill="#EEEEEE" />
                    <path d="M229.776 58.5596C229.998 58.1284 230.313 57.7935 230.72 57.555C231.136 57.3164 231.64 57.1972 232.232 57.1972V58.4908H231.899C230.484 58.4908 229.776 59.2522 229.776 60.7752V64.8761H228.514V57.3348H229.776V58.5596Z" fill="#EEEEEE" />
                    <path d="M237.117 56.11C236.876 56.11 236.673 56.0274 236.506 55.8623C236.34 55.6972 236.257 55.4953 236.257 55.2568C236.257 55.0182 236.34 54.8164 236.506 54.6513C236.673 54.4861 236.876 54.4036 237.117 54.4036C237.348 54.4036 237.542 54.4861 237.7 54.6513C237.866 54.8164 237.949 55.0182 237.949 55.2568C237.949 55.4953 237.866 55.6972 237.7 55.8623C237.542 56.0274 237.348 56.11 237.117 56.11ZM237.727 57.3348V64.8761H236.465V57.3348H237.727Z" fill="#EEEEEE" />
                    <path d="M245.485 63.7202L247.844 57.3348H249.189L246.206 64.8761H244.736L241.752 57.3348H243.112L245.485 63.7202Z" fill="#EEEEEE" />
                    <path d="M260.144 60.8165C260.144 61.055 260.131 61.3073 260.103 61.5734H254.026C254.072 62.3165 254.326 62.8991 254.789 63.3211C255.26 63.7339 255.829 63.9404 256.495 63.9404C257.041 63.9404 257.494 63.8165 257.855 63.5688C258.225 63.3119 258.484 62.9725 258.632 62.5504H259.992C259.788 63.2752 259.381 63.867 258.771 64.3257C258.16 64.7752 257.402 65 256.495 65C255.774 65 255.126 64.8394 254.553 64.5183C253.989 64.1972 253.545 63.7431 253.221 63.1559C252.897 62.5596 252.735 61.8715 252.735 61.0917C252.735 60.3119 252.892 59.6284 253.207 59.0412C253.521 58.4541 253.961 58.0045 254.525 57.6926C255.099 57.3715 255.755 57.2109 256.495 57.2109C257.217 57.2109 257.855 57.3669 258.41 57.6788C258.965 57.9908 259.391 58.422 259.687 58.9724C259.992 59.5137 260.144 60.1284 260.144 60.8165ZM258.84 60.555C258.84 60.0779 258.734 59.6697 258.521 59.3302C258.308 58.9816 258.017 58.7201 257.647 58.5458C257.286 58.3623 256.884 58.2706 256.44 58.2706C255.802 58.2706 255.256 58.4724 254.803 58.8761C254.359 59.2798 254.104 59.8394 254.039 60.555H258.84Z" fill="#EEEEEE" />
                </svg>
            </Box>
            <Typography className='poppins' sx={{
                mt: 4,
                width: "180px",
                fontSize: "14px",
                fontWeight: 200,
                lineHeight: "21px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#FFFFFF"
            }}>
                Access your dashboard
                to help you manage your
                rent activities
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
                <Link href="../">
                    <Button
                        className='poppins'
                        variant='outlined'
                        size='large'
                        sx={{
                            border: "1px solid #FFF",
                            color: "#FFF",
                            px: 4, textTransform: "capitalize"
                        }}>Back Home</Button>
                </Link>
            </Box>
        </Grid>
    )
}

export default AuthSide;
