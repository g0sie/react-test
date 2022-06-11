import './Button.css'
import { MouseEventHandler } from 'react';

interface ButtonProps {
  className?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
  content?: string;
}

export const Button = (props?: ButtonProps) => {
  return <div>
    <button
      className={'btn'}
      onClick={props?.onClick}
      disabled={props?.disabled}>
      {props?.content}
    </button>
  </div>
}

export default Button