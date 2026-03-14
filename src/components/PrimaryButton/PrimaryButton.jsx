import styles from './PrimaryButton.module.css'

const PrimaryButton = ({ children, onClick, type = 'button', className = '', ...props }) => {
  return (
    <button 
      className={`${styles.primaryButton} ${className}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryButton