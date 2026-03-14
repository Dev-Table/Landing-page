import styles from './SecondaryButton.module.css'

const SecondaryButton = ({ children, onClick, type = 'button', className = '', ...props }) => {
  return (
    <button 
      className={`${styles.secondaryButton} ${className}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default SecondaryButton