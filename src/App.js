import React from "react";

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="header__left d-flex align-center">
          <img
            className="mr-15"
            width={40}
            height={40}
            src="img/logoHeader.png"
            alt="Logo"
          />
          <div>
            <h3 className="text-uppercase">Sneakers</h3>
            <p className="opacity-4">Магазин лучших кроссовок</p>
          </div>
        </div>
        <div>
          <ul className="header__right d-flex">
            <li className="mr-30">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-20"
              >
                <path
                  d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z"
                  stroke="#9B9B9B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z"
                  stroke="#9B9B9B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
                  stroke="#9B9B9B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>1205 руб.</span>
            </li>
            <li>
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z"
                  fill="#9B9B9B"
                />
              </svg>
            </li>
          </ul>
        </div>
      </header>
      <div className="conten p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="content__sneakers d-flex flex-wrap">
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers 1.png"
              alt="sneakers"
              className="mb-15"
            />
            <h5 className="mb-15">Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className=" card__bottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="mb-5">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers 2.png"
              alt="sneakers"
              className="mb-15"
            />
            <h5 className="mb-15">Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className=" card__bottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="mb-5">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers 3.png"
              alt="sneakers"
              className="mb-15"
            />
            <h5 className="mb-15">Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className=" card__bottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="mb-5">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers 4.png"
              alt="sneakers"
              className="mb-15"
            />
            <h5 className="mb-15">Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className=" card__bottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="mb-5">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers 5.png"
              alt="sneakers"
              className="mb-15"
            />
            <h5 className="mb-15">Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className=" card__bottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="mb-5">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers 6.png"
              alt="sneakers"
              className="mb-15"
            />
            <h5 className="mb-15">Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className=" card__bottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="mb-5">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers 7.png"
              alt="sneakers"
              className="mb-15"
            />
            <h5 className="mb-15">Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className=" card__bottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="mb-5">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers 8.png"
              alt="sneakers"
              className="mb-15"
            />
            <h5 className="mb-15">Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className=" card__bottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="mb-5">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers 9.png"
              alt="sneakers"
              className="mb-15"
            />
            <h5 className="mb-15">Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className=" card__bottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="mb-5">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers 10.png"
              alt="sneakers"
              className="mb-15"
            />
            <h5 className="mb-15">Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className=" card__bottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="mb-5">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers 11.png"
              alt="sneakers"
              className="mb-15"
            />
            <h5 className="mb-15">Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className=" card__bottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="mb-5">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers 12.png"
              alt="sneakers"
              className="mb-15"
            />
            <h5 className="mb-15">Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className=" card__bottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="mb-5">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
