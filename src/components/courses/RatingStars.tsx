
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingStarsProps {
  rating: number;
  size?: number;
  showValue?: boolean;
  votes?: number;
  className?: string;
}

const RatingStars = ({ rating, size = 18, showValue = true, votes, className }: RatingStarsProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={size} className="fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && (
        <Star size={size} className="fill-yellow-400 text-yellow-400" />
      )}
      {showValue && (
        <span className="text-sm font-medium ml-1 text-gray-700">{rating.toFixed(1)}</span>
      )}
      {votes !== undefined && (
        <span className="text-sm text-gray-500 ml-1">({votes} valoraciones)</span>
      )}
    </div>
  );
};

export default RatingStars;
