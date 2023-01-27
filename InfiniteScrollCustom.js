import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd';
import PropTypes from 'prop-types';
import React, {useEffect,useState} from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';


function InfiniteScrollCustom (props) {
  const { t } = useTranslation();
  const {className,data, itemCount, page, maxPage, sendPage, endMessage, targetedElem, height, rowHeight, currentData, ...rest} = props;

  
  const [hasMore, setHasMore] = useState(false);
  const [containerHeight, setContainerHeight] = useState(rowHeight || 25);

  useEffect(() => {
    rowHeight ? setContainerHeight(data.length * containerHeight) : setContainerHeight(height);
  }, []);
  
  const loaderIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const loadMore = () => {
    if (currentData) {
      sendPage(page + 1);
    } else {
      if (page < maxPage) {
        //sendPage used for sending page number to parent component it means where you are using this component 
        sendPage(page + 1);
      }
    } 
  };

  //our api send maximum 15 data per page
  const PER_PAGE = 14;

  useEffect(() => {
    if (currentData) {
      setHasMore(currentData?.length > PER_PAGE); //currentData.length > 6 then it will return true otherwise false
    } else {
      setHasMore(data?.length < itemCount);
    }
  }, [data, currentData, page, itemCount]);

  return (
    <div>
      <InfiniteScroll 
          {...rest}
          className={className}
          dataLength={data?.length} 
          next={() => loadMore()} 
          hasMore={hasMore}
          height={data?.length > 0 ? containerHeight : 'auto'}
          loader={<div className="text-center"><Spin indicator={loaderIcon} /></div>}
          scrollableTarget={targetedElem}
          endMessage={(endMessage && data?.length > 15) ? <div className="caught-panel them-bg">{t('Looks like you reached the end')}</div> : null}
          >
        {props.children}
      </InfiniteScroll>
    </div>
  );
}

InfiniteScrollCustom.propTypes = {
  children: PropTypes.any,
  data: PropTypes.array,
  currentData: PropTypes.array,
  itemCount: PropTypes.number,
  page: PropTypes.number,
  maxPage: PropTypes.number,
  endMessage: PropTypes.bool,
  msgAfter: PropTypes.number,
  targetedElem: PropTypes.string,
  height: PropTypes.any,
  sendPage: PropTypes.func,
  rowHeight: PropTypes.number,
  className:PropTypes.string
};

export default InfiniteScrollCustom;
