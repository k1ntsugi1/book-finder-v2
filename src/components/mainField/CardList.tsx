import { useRef } from 'react';

import CardOfItem from './CardOfItem';
import EmptyResultOfSearching from './EmptyResultOfSearching';

import { useAppSelector } from '../../store/hooks';

import ProgressSection from '../progressSection/ProgressSection';

import type { Dictionary } from '@reduxjs/toolkit';
import type { ParsedItem } from '../../utils/parseResponseItems';
import SpinnerOfLoading from '../SpinnerOfLoading';

interface IProps {
  items: Dictionary<ParsedItem>;
  statusOfLoading: string;
}

const CardList: React.FC<IProps> = (props) => {
  const { items, statusOfLoading } = props;
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
      {!isNotEmpty && statusOfLoading !== 'pending' && <EmptyResultOfSearching />}
      {statusOfLoading === 'pending' && <SpinnerOfLoading />}
      {percentOfFilling > 0 && <ProgressSection upperBlockRef={upperBlockRef} />}
    </>
  );
};

export default CardList;
