/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Skeleton } from 'antd'
import React, { JSXElementConstructor, ReactElement } from 'react'
import ContentLoader from 'react-content-loader'

interface Props {
  length?: number
  size?: 'small' | 'large' | 'default' | undefined
  block?: boolean | undefined
  noStyle?: undefined
  type?: string
  shape?: 'default' | 'circle' | 'square' | 'round' | undefined
  active?: boolean | undefined
}

interface propsNew {
  length: number
}

export const SkeletonParagraph = ({ length, size, block, noStyle, type, shape, active }: Props): ReactElement<unknown, string | JSXElementConstructor<unknown>> => {
  switch (type) {
    case 'IMAGE':
      return <Skeleton.Image />
    // case 'RECT':
    //   return (<ContentLoader viewBox={'-50 0 1400 250'} >
    //     <rect x={'25%'} y={100} rx="0" ry="0" width={250} height={250} />
    //   </ContentLoader>)
    case 'BUTTON':
      <Skeleton.Button active={active ?? true} size={size} shape={shape} block={block} /> //eslint-disable-line
      break
    default:
      return (
        <div className={noStyle ?? 'my-3'}>
          {Array.from(Array(length).keys()).map((item, index) => (
            <div className={noStyle ?? 'my-3'} key={index}>
              <Skeleton.Input active={active ?? true} size={size} block={block}/>
            </div>
          ))}
        </div>
      )
  }

  return (
    <div className={noStyle ?? 'my-3'}>
      {Array.from(Array(length).keys()).map((item, index) => (
        <div className={noStyle ?? 'my-3'} key={index}>
          <Skeleton.Input active={true} size={size} block={block}/>
        </div>
      ))}
    </div>

  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const SkeletonDefault = ({ length, ...props }: propsNew) => {
  return (
    <div className='my-3'>
      {Array.from(Array(length).keys()).map((item, index) => (
        <Skeleton active {...props} key={index}/>
      ))}
    </div>
  )
}

interface circleRectProps {
  rowCounts?: string | number
  rectHeight?: string | number
  viewBox?: string | undefined
  circleCx?: string | number
  circleCy?: string | number
  circleR?: string | number
  rectX?: string | number
  rectY?: string | number
  rectWidth?: string | number
}

interface tableProps {
  columnWidth: number[]
  rowHeight?: number
  rowCounts?: string | number
}

export const CircleRect = ({ rowCounts, viewBox, circleCx, circleCy, circleR, rectX, rectY, rectHeight, rectWidth }: circleRectProps): JSX.Element => {
  const rows = rowCounts ?? 5
  const CirCx = circleCx ?? 150
  const CirCy = circleCy ?? 150
  const CirR = circleR ?? 120
  const RecX = rectX ?? '25%'
  const RecY = rectY ?? 100
  const Rectheight = rectHeight ?? 50
  const RectWidth = rectWidth ?? '65%'
  const newViewBox = viewBox ?? '-50 0 1400 250'

  return (
    <div className="mb-2">
      {Array.from(Array(rows).keys()).map((_, i) => (
        <ContentLoader viewBox={newViewBox} key={i} >
          {Array.from(Array(rows).keys())?.map((_, index) => {
            return (
              <React.Fragment key={index}>
                <circle cx={CirCx} cy={CirCy} r={CirR} />
                <rect x={RecX} y={RecY} rx="0" ry="0" width={RectWidth} height={Rectheight}/>
              </React.Fragment>
            )
          })}
        </ContentLoader>
      ))}
    </div>
  )
}

export const TableContentLoaderWithProps = ({ columnWidth, rowCounts, rowHeight }: tableProps, props: object): JSX.Element => {
  const rows = rowCounts ?? 5
  const height = rowHeight ?? 50
  let spaceValue = 0
  const spaceArray = columnWidth?.map((item) => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    spaceValue += item + 0.1
    return spaceValue - item
  })

  return (
    <div className="mb-2" {...props}>
      {Array.from(Array(rows).keys()).map((_, i) => (
        <ContentLoader viewBox={`0 0 1500 ${height}`} key={i} >
          {columnWidth?.map((column, index) => {
            return (
              <React.Fragment key={index}>
                <rect x={`${(spaceArray[index]) + index}%`} y={height > 80 ? 30 : 20} rx="4" ry="4" width={`${column - 2}%`} height={height}/>
              </React.Fragment>
            )
          })}
        </ContentLoader>
      ))}
    </div>
  )
}

interface RectShapeProps {
  rowCounts?: number
  rectX?: string | number
  rectY?: string | number
  canvasWidth?: number
  canvasHeight?: number
  viewBox?: string
  width: string | number
  height: string | number
}

export const RectShape = ({ rowCounts, rectX, rectY, canvasWidth, canvasHeight, viewBox, width, height }: RectShapeProps): JSX.Element => {
  const rows = rowCounts ?? 1
  const x = rectX ?? 10
  const y = rectY ?? 10
  const canvWidth = canvasWidth ?? 1500
  const canvHeight = canvasHeight ?? 120
  const canvBox = viewBox ?? '0 0 1500 120'

  return (
    <>
      {Array.from(Array(rows).keys()).map((_, i) => (
        <ContentLoader
          key={i}
          speed={4}
          width={canvWidth}
          height={canvHeight}
          viewBox={canvBox}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x={x} y={y} rx="0" ry="0" width={width} height={height} />
        </ContentLoader>
      ))}
    </>
  )
}