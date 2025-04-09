import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const CustomButton = ({ label, onClick, icon, variant = 'contained' }) => {
  return (
    <Button
      variant={variant}
      sx={{
        backgroundColor:"#d4a017", // Button background color
        color: 'black',            // Text color for contrast
        '&:hover': {
          backgroundColor:'#b8860b', // Slightly darker yellow on hover
        },
        padding: '10px 20px',     // Add some padding
        borderRadius: '8px',      // Rounded corners
        fontWeight: 'bold',       // Bold text
      }}
      startIcon={icon ? <CloseIcon /> : null}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
