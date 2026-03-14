import styles from './CTAButton.module.css'

const CTAButton = ({ children, onClick, type = 'button', className = '', ...props }) => {
  return (
    <button 
      className={`${styles.ctaButton} ${className}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default CTAButton