import './App.css';

export default function Footer() {
  return (
    <footer id="Footer">

      <div className="footer-copyright">
        <p>Copyright © <a href="https://bestbrasov.ro/" target="_blank" rel="noopener noreferrer">BEST Brașov</a></p>
      </div>

      <div className="social-icons">

        <a href="https://www.facebook.com/BESTBrasov" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-1 0-1.5.5-1.5 1.5V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z" /></svg>
        </a>

        <a href="https://www.linkedin.com/company/best-brasov/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10zM8 17H5V8h3v9zm-1.5-9.25c-.97 0-1.75-.78-1.75-1.75S5.53 4.25 6.5 4.25s1.75.78 1.75 1.75S7.47 7.75 6.5 7.75zM19 17h-3v-4.5c0-1.08-.02-2.47-1.5-2.47s-1.73 1.18-1.73 2.39V17h-3V8h2.88v1.32h.04c.4-.76 1.37-1.55 2.84-1.55 3.04 0 3.6 2 3.6 4.6V17z" /></svg>
        </a>

        <a href="https://www.instagram.com/bestbrasov/?hl=ro" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
        </a>
      </div>

    </footer>
  );
}