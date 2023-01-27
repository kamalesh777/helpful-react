/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
import Icon, { CreditCardFilled } from '@ant-design/icons'
import { Col, Form, Row } from 'antd'
import Cleave from 'cleave.js/react'
import moment from 'moment' // eslint-disable-line
import React, { useState } from 'react'

import styles from './style.module.css'

interface ChangeEvent<T> extends React.ChangeEvent<T> {
  target: { rawValue: string } & EventTarget & T
}
interface cardProps {
  name?: string | number
}

const CreditCardComponent = ({ name }: cardProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cardData, setCardData] = useState<Record<string, string>>({})
  const [cardType, setCardType] = useState<string>('')

  const onCreditCardChange = (event: ChangeEvent<HTMLInputElement>, fieldName: string | number): void => {
    const rawValue: string = event.target.rawValue
    setCardData((prevState) => ({ ...prevState, [fieldName]: rawValue }))
  }

  const onCreditCardTypeChanged = (type: string): void => {
    // eslint-disable-next-line no-console
    setCardType(type)
  }

  const mastercard = (): JSX.Element => <svg width="2304" height="1792" viewBox="0 0 2304 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1119 341q-128-85-281-85-103 0-197.5 40.5t-162.5 108.5-108.5 162-40.5 197q0 104 40.5 198t108.5 162 162 108.5 198 40.5q153 0 281-85-131-107-178-265.5t.5-316.5 177.5-265zm33 24q-126 99-172 249.5t-.5 300.5 172.5 249q127-99 172.5-249t-.5-300.5-172-249.5zm33-24q130 107 177.5 265.5t.5 317-178 264.5q128 85 281 85 104 0 198-40.5t162-108.5 108.5-162 40.5-198q0-103-40.5-197t-108.5-162-162.5-108.5-197.5-40.5q-153 0-281 85zm741 722h7v-3h-17v3h7v17h3v-17zm29 17h4v-20h-5l-6 13-6-13h-5v20h3v-15l6 13h4l5-13v15zm-8 440v2h-5v-3h5v1zm0 9h3l-4-5h2l1-1q1-1 1-3t-1-3l-1-1h-9v13h3v-5h1zm-1262-68q0-19 11-31t30-12q18 0 29 12.5t11 30.5q0 19-11 31t-29 12q-19 0-30-12t-11-31zm473-44q30 0 35 32h-70q5-32 35-32zm356 44q0-19 11-31t29-12 29.5 12.5 11.5 30.5q0 19-11 31t-30 12q-18 0-29-12t-11-31zm272 0q0-18 11.5-30.5t29.5-12.5 29.5 12.5 11.5 30.5q0 19-11.5 31t-29.5 12-29.5-12.5-11.5-30.5zm158 72q-2 0-4-1-1 0-3-2t-2-3q-1-2-1-4 0-3 1-4 0-2 2-4l1-1q2 0 2-1 2-1 4-1 3 0 4 1l4 2 2 4v1q1 2 1 3l-1 1v3l-1 1-1 2q-2 2-4 2-1 1-4 1zm-1345-4h30v-85q0-24-14.5-38.5t-39.5-15.5q-32 0-47 24-14-24-45-24-24 0-39 20v-16h-30v135h30v-75q0-36 33-36 30 0 30 36v75h29v-75q0-36 33-36 30 0 30 36v75zm166 0h29v-135h-29v16q-17-20-43-20-29 0-48 20t-19 51 19 51 48 20q28 0 43-20v17zm178-41q0-34-47-40l-14-2q-23-4-23-14 0-15 25-15 23 0 43 11l12-24q-22-14-55-14-26 0-41 12t-15 32q0 33 47 39l13 2q24 4 24 14 0 17-31 17-25 0-45-14l-13 23q25 17 58 17 29 0 45.5-12t16.5-32zm130 34l-8-25q-13 7-26 7-19 0-19-22v-61h48v-27h-48v-41h-30v41h-28v27h28v61q0 50 47 50 21 0 36-10zm86-132q-29 0-48 20t-19 51q0 32 19.5 51.5t49.5 19.5q33 0 55-19l-14-22q-18 15-39 15-34 0-41-33h101v-12q0-32-18-51.5t-46-19.5zm159 0q-23 0-35 20v-16h-30v135h30v-76q0-35 29-35 10 0 18 4l9-28q-9-4-21-4zm30 71q0 31 19.5 51t52.5 20q29 0 48-16l-14-24q-18 13-35 12-18 0-29.5-12t-11.5-31 11.5-31 29.5-12q19 0 35 12l14-24q-20-16-48-16-33 0-52.5 20t-19.5 51zm245 68h30v-135h-30v16q-15-20-42-20-29 0-48.5 20t-19.5 51 19.5 51 48.5 20q28 0 42-20v17zm133-139q-23 0-35 20v-16h-29v135h29v-76q0-35 29-35 10 0 18 4l9-28q-8-4-21-4zm140 139h29v-190h-29v71q-15-20-43-20t-47.5 20.5-19.5 50.5 19.5 50.5 47.5 20.5q29 0 43-20v17zm78-20l-2 1h-3q-2 1-4 3-3 1-3 4-1 2-1 6 0 3 1 5 0 2 3 4 2 2 4 3t5 1q4 0 6-1 0-1 2-2l2-1q1-1 3-4 1-2 1-5 0-4-1-6-1-1-3-4 0-1-2-2l-2-1q-1 0-3-.5t-3-.5zm360-1253v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z"/></svg>
  const discover = (): JSX.Element => <svg width="2304" height="1792" viewBox="0 0 2304 1792" xmlns="http://www.w3.org/2000/svg"><path d="M313 777q0 51-36 84-29 26-89 26h-17v-220h17q61 0 89 27 36 31 36 83zm1776-65q0 52-64 52h-19v-101h20q63 0 63 49zm-1709 65q0-74-50-120.5t-129-46.5h-95v333h95q74 0 119-38 60-51 60-128zm30 166h65v-333h-65v333zm320-101q0-40-20.5-62t-75.5-42q-29-10-39.5-19t-10.5-23q0-16 13.5-26.5t34.5-10.5q29 0 53 27l34-44q-41-37-98-37-44 0-74 27.5t-30 67.5q0 35 18 55.5t64 36.5q37 13 45 19 19 12 19 34 0 20-14 33.5t-36 13.5q-48 0-71-44l-42 40q44 64 115 64 51 0 83-30.5t32-79.5zm278 90v-77q-37 37-78 37-49 0-80.5-32.5t-31.5-82.5q0-48 31.5-81.5t77.5-33.5q43 0 81 38v-77q-40-20-80-20-74 0-125.5 50.5t-51.5 123.5 51 123.5 125 50.5q42 0 81-19zm1232 604v-527q-65 40-144.5 84t-237.5 117-329.5 137.5-417.5 134.5-504 118h1569q26 0 45-19t19-45zm-851-757q0-75-53-128t-128-53-128 53-53 128 53 128 128 53 128-53 53-128zm152 173l144-342h-71l-90 224-89-224h-71l142 342h35zm173-9h184v-56h-119v-90h115v-56h-115v-74h119v-57h-184v333zm391 0h80l-105-140q76-16 76-94 0-47-31-73t-87-26h-97v333h65v-133h9zm199-681v1268q0 56-38.5 95t-93.5 39h-2040q-55 0-93.5-39t-38.5-95v-1268q0-56 38.5-95t93.5-39h2040q55 0 93.5 39t38.5 95z"/></svg>
  const amex = (): JSX.Element => <svg width="2304" height="1792" viewBox="0 0 2304 1792" xmlns="http://www.w3.org/2000/svg"><path d="M119 682h89l-45-108zm621 526l74-79-70-79h-163v49h142v55h-142v54h159zm158-78l99 110v-217zm288-47q0-33-40-33h-84v69h83q41 0 41-36zm289-4q0-29-42-29h-82v61h81q43 0 43-32zm-278-466q0-29-42-29h-82v60h81q43 0 43-31zm459 69h89l-44-108zm-957-155v271h-66v-212l-94 212h-57l-94-212v212h-132l-25-60h-135l-25 60h-70l116-271h96l110 257v-257h106l85 184 77-184h108zm556 556q0 20-5.5 35t-14 25-22.5 16.5-26 10-31.5 4.5-31.5 1-32.5-.5-29.5-.5v91h-126l-80-90-83 90h-256v-271h260l80 89 82-89h207q109 0 109 89zm-291-341v56h-217v-271h217v57h-152v49h148v55h-148v54h152zm1340 559v229q0 55-38.5 94.5t-93.5 39.5h-2040q-55 0-93.5-39.5t-38.5-94.5v-678h111l25-61h55l25 61h218v-46l19 46h113l20-47v47h541v-99l10-1q10 0 10 14v86h279v-23q23 12 55 18t52.5 6.5 63-.5 51.5-1l25-61h56l25 61h227v-58l34 58h182v-378h-180v44l-25-44h-185v44l-23-44h-249q-69 0-109 22v-22h-172v22q-24-22-73-22h-628l-43 97-43-97h-198v44l-22-44h-169l-78 179v-391q0-55 38.5-94.5t93.5-39.5h2040q55 0 93.5 39.5t38.5 94.5v678h-120q-51 0-81 22v-22h-177q-55 0-78 22v-22h-316v22q-31-22-87-22h-209v22q-23-22-91-22h-234l-54 58-50-58h-349v378h343l55-59 52 59h211v-89h21q59 0 90-13v102h174v-99h8q8 0 10 2t2 10v87h529q57 0 88-24v24h168q60 0 95-17zm-758-234q0 23-12 43t-34 29q25 9 34 26t9 46v54h-65v-45q0-33-12-43.5t-46-10.5h-69v99h-65v-271h154q48 0 77 15t29 58zm-277-467q0 24-12.5 44t-33.5 29q26 9 34.5 25.5t8.5 46.5v53h-65q0-9 .5-26.5t0-25-3-18.5-8.5-16-17.5-8.5-29.5-3.5h-70v98h-64v-271l153 1q49 0 78 14.5t29 57.5zm529 609v56h-216v-271h216v56h-151v49h148v55h-148v54zm-426-682v271h-66v-271h66zm693 652q0 86-102 86h-126v-58h126q34 0 34-25 0-16-17-21t-41.5-5-49.5-3.5-42-22.5-17-55q0-39 26-60t66-21h130v57h-119q-36 0-36 25 0 16 17.5 20.5t42 4 49 2.5 42 21.5 17.5 54.5zm239-50v101q-24 35-88 35h-125v-58h125q33 0 33-25 0-13-12.5-19t-31-5.5-40-2-40-8-31-24-12.5-48.5q0-39 26.5-60t66.5-21h129v57h-118q-36 0-36 25 0 20 29 22t68.5 5 56.5 26zm-165-601v270h-92l-122-203v203h-132l-26-60h-134l-25 60h-75q-129 0-129-133 0-138 133-138h63v59q-7 0-28-1t-28.5-.5-23 2-21.5 6.5-14.5 13.5-11.5 23-3 33.5q0 38 13.5 58t49.5 20h29l92-213h97l109 256v-256h99l114 188v-188h66z"/></svg>
  const visa = (): JSX.Element => <svg width="2304" height="1792" viewBox="0 0 2304 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1975 990h-138q14-37 66-179l3-9q4-10 10-26t9-26l12 55zm-1444-65l-58-295q-11-54-75-54h-268l-2 13q311 79 403 336zm179-349l-162 438-17-89q-26-70-85-129.5t-131-88.5l135 510h175l261-641h-176zm139 642h166l104-642h-166zm768-626q-69-27-149-27-123 0-201 59t-79 153q-1 102 145 174 48 23 67 41t19 39q0 30-30 46t-69 16q-86 0-156-33l-22-11-23 144q74 34 185 34 130 1 208.5-59t80.5-160q0-106-140-174-49-25-71-42t-22-38q0-22 24.5-38.5t70.5-16.5q70-1 124 24l15 8zm425-16h-128q-65 0-87 54l-246 588h174l35-96h212q5 22 20 96h154zm262-320v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z"/></svg>
  const jcb = (): JSX.Element => <svg width="2304" height="1792" viewBox="0 0 2304 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1951 998q0 26-15.5 44.5t-38.5 23.5q-8 2-18 2h-153v-140h153q10 0 18 2 23 5 38.5 23.5t15.5 44.5zm-18-213q0 25-15 42t-38 21q-3 1-15 1h-139v-129h139q3 0 8.5.5t6.5.5q23 4 38 21.5t15 42.5zm-1205 164v-308h-228v308q0 58-38 94.5t-105 36.5q-108 0-229-59v112q53 15 121 23t109 9l42 1q328 0 328-217zm714 184v-113q-99 52-200 59-108 8-169-41t-61-142 61-142 169-41q101 7 200 58v-112q-48-12-100-19.5t-80-9.5l-28-2q-127-6-218.5 14t-140.5 60-71 88-22 106 22 106 71 88 140.5 60 218.5 14q101-4 208-31zm734-115q0-54-43-88.5t-109-39.5v-3q57-8 89-41.5t32-79.5q0-55-41-88t-107-36q-3 0-12-.5t-14-.5h-455v510h491q74 0 121.5-36.5t47.5-96.5zm128-762v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z"/></svg>
  const diners = (): JSX.Element => <svg width="2304" height="1792" viewBox="0 0 2304 1792" xmlns="http://www.w3.org/2000/svg"><path d="M858 1241v-693q-106 41-172 135.5t-66 211.5 66 211.5 172 134.5zm504-346q0-117-66-211.5t-172-135.5v694q106-41 172-135.5t66-211.5zm215 0q0 159-78.5 294t-213.5 213.5-294 78.5q-119 0-227.5-46.5t-187-125-125-187-46.5-227.5q0-159 78.5-294t213.5-213.5 294-78.5 294 78.5 213.5 213.5 78.5 294zm383 7q0-139-55.5-261.5t-147.5-205.5-213.5-131-252.5-48h-301q-176 0-323.5 81t-235 230-87.5 335q0 171 87 317.5t236 231.5 323 85h301q129 0 251.5-50.5t214.5-135 147.5-202.5 55.5-246zm344-646v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z"/></svg>

  // make card icon according to the card number
  const creditCardIcon = (cardName: string): JSX.Element | undefined => {
    switch (cardName) {
      case 'mastercard':
        return <Icon component={mastercard} className={styles.cardIcon}/>
      case 'discover':
        return <Icon component={discover} className={styles.cardIcon}/>
      case 'amex':
        return <Icon component={amex} className={styles.cardIcon}/>
      case 'visa':
        return <Icon component={visa} className={styles.cardIcon}/>
      case 'jcb':
        return <Icon component={jcb} className={styles.cardIcon}/>
      case 'diners':
        return <Icon component={diners} className={styles.cardIcon}/>
      default:
        return <CreditCardFilled className={styles.cardIcon} />
    }
  }

  const fieldName = name != null ? name : 'card'

  return (
    <Form.Item className='mb-0' >
      <Row className='border rounded'>
        <Col span={14}>
          {creditCardIcon(cardType)}
          <Form.Item name={[fieldName, 'card_number']} className='mb-0' noStyle rules={[
            {
              required: false,
              message: 'Card number is required'
            },
            ({ getFieldValue }) => ({
              async validator (_, value: string) {
                if (cardType !== 'unknown') {
                  return await Promise.resolve()
                }
                return await Promise.reject(new Error('Enter a valid card number'))
              }
            })
          ]}>
            <Cleave
              className={styles.cardNumber}
              options={{ creditCard: true, onCreditCardTypeChanged }}
              onChange={(e) => onCreditCardChange(e, 'card_number')} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name={[fieldName, 'expiry_date']} className='mb-0' noStyle rules={[
            {
              required: false,
              message: 'Card expiry date is required'
            }
            // ({ getFieldValue }) => ({
            //   async validator (_, value: string) {
            //     const currentYear = moment()
            //     const inputDate = moment(value, 'MMYY')
            // if (value.length > 0) {
            //   if (inputDate > currentYear) {
            //     return await Promise.resolve()
            //   }
            //   return await Promise.reject(new Error('Enter a valid expiry date'))
            // }
            //   }
            // })
          ]}>
            <Cleave
              placeholder="MM / YY"
              className={styles.cardExpiry}
              options={{ date: true, datePattern: ['m', 'y'] }}
              onChange={(e) => onCreditCardChange(e, 'expiry_date')} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name={[fieldName, 'cvv']} className='mb-0' noStyle rules={[
            {
              required: false,
              message: 'CVV is required'
            }
            // {
            //   min: 3,
            //   message: 'Enter a valid CVV'
            // }
          ]}>
            <Cleave
              placeholder="CVV"
              className={styles.cardExpiry}
              options={{ blocks: [4] }}
              onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>): void => {
                if (e.key.match(/^[0-9]+$/) == null) {
                  e.preventDefault()
                }
              }}
              onChange={(e) => onCreditCardChange(e, 'cvv')} />
          </Form.Item>
        </Col>
      </Row>
    </Form.Item>

  )
}

export default CreditCardComponent