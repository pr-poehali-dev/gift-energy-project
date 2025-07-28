import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface EmptyResultsProps {
  onResetFilters: () => void;
}

const EmptyResults = ({ onResetFilters }: EmptyResultsProps) => {
  return (
    <div className="text-center py-12">
      <Icon name="Search" size={64} className="text-gray-300 mx-auto mb-4" />
      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
        Подарки не найдены
      </h3>
      <p className="text-gray-600 font-body mb-6">
        Попробуйте изменить параметры поиска или сбросить фильтры
      </p>
      <Button 
        onClick={onResetFilters}
        className="bg-emotion-joy hover:bg-emotion-joy/90 text-white"
      >
        Сбросить фильтры
      </Button>
    </div>
  );
};

export default EmptyResults;