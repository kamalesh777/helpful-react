import { distinct, getBase64 } from '@hooks/commonFunction';
import { message, Upload } from 'antd';
import { array, PropTypes } from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

const DragAndDrop = ({
  filesArray, mode, className, content, maxCount, maxSize, fileType, sizeErrorMsg, hideList, defaultFileList, removedList,
}) => {
  const { Dragger } = Upload;
  const [fileList, setFileList] = useState(defaultFileList || []);
  const [base64Files, setBase64Files] = useState([]);
  const [removedArr, setRemovedArr] = useState([]);

  const props = useMemo(() => ({
    name: 'file',
    multiple: mode || true,
    beforeUpload: (file) => {
      const isLt2M = file.size / 1024 / 1024 < maxSize;
      if (!isLt2M) {
        message.error(sizeErrorMsg || `Image must be smaller than ${maxSize}mb!`);
      }
      return isLt2M || Upload.LIST_IGNORE;
    },
    onChange: ({ file, fileList: arr }) => {
      if (file) {
        const isUniqueFile = fileList.filter((f) => f.name === file.name).length > 0;
        const isMaximum = arr.length > maxCount;

        if (isUniqueFile) {
          setFileList((state) => [...state]);
          // message.error(`${file.name} is duplicate file`);
          return false;
        }

        if (isMaximum) {
          setFileList(arr.slice(0, maxCount));
          // message.error(`Maximum ${maxCount} files are allowed`);
          return false;
        }
        setFileList((prevState) => [...prevState, file]);
      }
    },
    onRemove: (file) => {
      if (fileList.some((item) => item.uid === file.uid || item?._id === file?._id)) {
        setFileList((fList) => fList.filter((item) => item.uid !== file.uid));
        setBase64Files((fList) => fList.filter((item) => item.uid !== file.uid));

        const arr = fileList.filter((item) => item.uid === file.uid);
        setRemovedArr([...removedArr, ...arr]);
      }
      return false;
    },
  }), [fileList]);

  // on every removed id will be add on removeArr
  useEffect(() => {
    removedList(removedArr);
  }, [fileList]);

  // onChange of fileList fileArray function will call
  useEffect(() => {
    fileList?.map((file) => (!file.hasOwnProperty('_id')
      ? getBase64(file.originFileObj, (url) => {
        setBase64Files((prevState) => [...prevState, {
          name: file?.name, file: url, uid: file?.uid, type: file?.type,
        }]);
      }) : setBase64Files((prevState) => [...prevState, { name: file?.name, _id: file?._id, type: file?.mime_type }])));
  }, [fileList]);

  useEffect(() => {
    // object will merge with same uid
    filesArray(distinct(base64Files, ['uid'], false));
  }, [base64Files]);

  return (
    <div className={`drag-box ${className}`}>
      <Dragger
        {...props}
        fileList={fileList}
        removedList={removedList}
        accept={fileType}
        showUploadList={!hideList}
        // defaultFileList={defaultFileList}
      >
        {content}
      </Dragger>
    </div>
  );
};

export default DragAndDrop;

DragAndDrop.propTypes = {
  filesArray: PropTypes.func,
  mode: PropTypes.bool,
  className: PropTypes.string,
  maxCount: PropTypes.number,
  maxSize: PropTypes.number,
  fileType: PropTypes.string,
  sizeErrorMsg: PropTypes.string,
  hideList: PropTypes.bool,
  defaultFileList: PropTypes.objectOf(PropTypes.string),
  removedList: PropTypes.func,
};

DragAndDrop.defaultProps = {
  filesArray: () => {},
  mode: false,
  className: '',
  maxCount: 1,
  maxSize: 3,
  fileType: '',
  sizeErrorMsg: '',
  hideList: false,
  defaultFileList: [],
  removedList: () => {},
};
