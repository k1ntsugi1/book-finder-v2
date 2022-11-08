import { useRef } from 'react';

import CardOfItem from './CardOfItem';
import EmptyResultOfSearching from './EmptyResultOfSearching';

import { useAppSelector } from '../../store/hooks';

import ProgressSection from '../progressSection/ProgressSection';

import type { Dictionary } from '@reduxjs/toolkit';
import type { ParsedItem } from '../../utils/parseResponseItems';

interface IProps {
  items: Dictionary<ParsedItem>;
}

const CardList: React.FC<IProps> = (props) => {
  const { items } = props;
  const upperBlockRef = useRef<HTMLDivElement>(null);

  const { percentOfFilling } = useAppSelector((store) => store.uiProgressBar);

  const showingItems = Object.values(items);
  const isNotEmpty = showingItems.length ? true : false;

  return (
    <>
      {percentOfFilling > 40 && (
        <div className="w-100" style={{ height: '1px' }} ref={upperBlockRef}></div>
      )}

      {isNotEmpty &&
        Object.values(showingItems).map((item) => {
          if (!item) return item;
          return <CardOfItem key={item.id} item={item} />;
        })}
      {!isNotEmpty && <EmptyResultOfSearching />}
      {percentOfFilling > 0 && <ProgressSection upperBlockRef={upperBlockRef} />}
    </>
  );
};

export default CardList;
