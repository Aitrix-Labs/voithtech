import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <Link to="/" className="header__logo" aria-label="VoithTech home">
      <svg width="168" height="24" viewBox="0 0 168 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.1042 24H9.82143L0 0H7.7753L12.5 13.4463L17.1875 0H25L15.1042 24ZM49.2223 11.9813C49.2223 5.35413 43.8737 0 37.2533 0C30.633 0 25.247 5.35413 25.247 11.9813C25.2844 18.6084 30.6704 24 37.2907 24C43.9111 24 49.2223 18.6084 49.2223 11.9813ZM42.7142 11.9813C42.7142 15.014 40.3204 17.4852 37.2907 17.4852C34.2611 17.4852 31.7925 15.014 31.7925 11.9813C31.7925 8.94852 34.2611 6.55226 37.2907 6.55226C40.3204 6.55226 42.7142 8.94852 42.7142 11.9813ZM57 0H53V24H61V0H57ZM77.094 7.11401V24H69.906V7.11401H65V0H82V7.11401H77.094ZM98.9609 15.3225V24H106V0H98.9609V8.20847H93.0763V0H86V24H93.0763V15.3225H98.9609Z"
          fill="currentColor"
        />
        <text x="112" y="18" fontFamily="Outfit, Arial, sans-serif" fontSize="15" fontWeight="700" letterSpacing="0.04em" fill="currentColor">
          TECH
        </text>
      </svg>
    </Link>
  )
}
