import { FaGithub, FaGithubAlt } from 'react-icons/fa';

export const Header = () => {
  return (
    <header>
      <div className='Header_Left'>
        <img src='image/logo.png' />
      </div>
      <div className='Header_Right'>
        <a href='https://github.com/Jumim' target='_blank'><FaGithub /></a>
        <a href='https://jumim.github.io/' target='_blank'><FaGithubAlt /></a>
      </div>
    </header>
  );
}
