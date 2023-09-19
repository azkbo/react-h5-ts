/**
 * Author: Meng
 * Date: 2023-09-14
 * Modify: 2023-09-14
 * Desc: 
 */

type HeaderProps = {
  title: string;
}

function Header(props: Readonly<HeaderProps>) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Header;