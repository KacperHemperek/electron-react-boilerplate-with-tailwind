import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import 'tailwindcss/tailwind.css';

function Hello() {
  return (
    <div className="flex items-center justify-center h-full flex-col text-white gap-6">
      <div className="flex justify-center items-center my-5">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1 className="text-3xl font-semibold">electron-react-boilerplate</h1>
      <div className="flex gap-4">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="bg-white py-2 px-5 rounded-lg border-none appearance-none text-xl shadow-md transition-all duration-100 ease-in cursor-pointer opacity-90 text-black hover:scale-105 hover:opacity-100"
          >
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="bg-white py-2 px-5 rounded-lg border-none appearance-none text-xl shadow-md transition-all duration-100 ease-in cursor-pointer opacity-90 text-black hover:scale-105 hover:opacity-100"
          >
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
