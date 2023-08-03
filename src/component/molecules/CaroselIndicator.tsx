import React from 'react';
import Circle from '../atoms/Circle';

function CaroselIndicator({ currentlyOn = 1 }: { currentlyOn?: number }) {
  const selectorGenerator = () => {
    const selectedList = [];
    const color = 'white';
    for (let i = 0; i < 5; i++) {
      selectedList.push(<Circle color={color} opacity={currentlyOn == i + 1 ? 1 : 0.5} />);
    }
    return selectedList;
  };

  return <div className="flex gap-1 max-w-min ">{selectorGenerator()}</div>;
}

export default CaroselIndicator;
