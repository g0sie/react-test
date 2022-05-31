import './Button.css'
import { MouseEventHandler } from 'react';

const STYLES = [
  'btn--primary',
  'btn--outline'
]

const SIZES = [
  'btn--medium',
  'btn--large'
]

interface ButtonProps {
  className?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
  content?: string;
  style?: string;
  size?: string;
}

export const Button = (props?: ButtonProps) => {
  console.log(props?.style as string)

  const checkButtonStyle = STYLES.includes(props?.style as string) && props?.style !== undefined ? props?.style : STYLES[0]
  const checkButtonSize = SIZES.includes(props?.size as string) ? props?.size : SIZES[0]

  return <div>
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={props?.onClick}
      disabled={props?.disabled}>
      {props?.content} {props?.style}
    </button>
  </div>
}

export default Button