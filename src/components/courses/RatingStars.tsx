import { Rating, Stack, Typography } from '@mui/material';

interface RatingStarsProps {
  rating: number;
  size?: 'small' | 'medium' | 'large';
  showValue?: boolean;
  votes?: number;
}

const RatingStars = ({ rating, size = 'medium', showValue = true, votes }: RatingStarsProps) => {
  return (
    <Stack direction="row" alignItems="center" spacing={0.5}>
      <Rating value={rating} precision={0.1} readOnly size={size} />
      {showValue && (
        <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.secondary' }}>
          {rating.toFixed(1)}
        </Typography>
      )}
      {votes !== undefined && (
        <Typography variant="body2" color="text.secondary">
          ({votes} valoraciones)
        </Typography>
      )}
    </Stack>
  );
};

export default RatingStars;
