export interface stepDisplay {
  currentState: string;
  activeState: string;
  alarmState: string;
  currentOn: number[];
  activeOn: number[];
  passedOn: number[];
  alarmOn: number[];
}

export const operationSteps: string[] = [
  'IDLE_SCAN_ORDER', // --- 0 - (Scan Order) Cycle Complete && Qty == 0)
  'SCANNING_ORDER', //----- 1 - Scan Order
  'VALIDATE_EMPTY', //----- 2 - Order Scanned OK
  'RUNNING', // ----------- 3 - Part NOT at Meter
  'MEASURING', // --------- 4 - Part at Meter - ^ Part Measuring NOK
  'RESISTANCE_PASS', // --- 5 - Part Measuring OK
  'RESISTANCE_NOT_PASS', // 6 - Part OK (Pass Time Filter)
  'REMOVE_PART', //-------- 7 - Part Not In Scale
  'PART_DISCOUNT', //------ 8 - Part Not In Scale (Pass Time Filter)
  'CYCLE_COMPLETE', // ---- 9 - Part Discounted (Pass Time Filter)
  'ORDER_FAILED' // ------ 10 - Order Scanned FAIL (From Step 1)
];

const IDLE_SCAN_ORDER = operationSteps.indexOf('IDLE_SCAN_ORDER'); // ------- 0
const SCANNING_ORDER = operationSteps.indexOf('SCANNING_ORDER'); // --------- 1
const VALIDATE_EMPTY = operationSteps.indexOf('VALIDATE_EMPTY'); // --------- 2
const RUNNING = operationSteps.indexOf('RUNNING'); // ----------------------- 3
const MEASURING = operationSteps.indexOf('MEASURING'); // ------------------- 4
const RESISTANCE_PASS = operationSteps.indexOf('RESISTANCE_PASS'); // ------- 5
const RESISTANCE_NOT_PASS = operationSteps.indexOf('RESISTANCE_NOT_PASS'); // 6
const REMOVE_PART = operationSteps.indexOf('REMOVE_PART'); // --------------- 7
const PART_DISCOUNT = operationSteps.indexOf('PART_DISCOUNT'); // ----------- 8
const CYCLE_COMPLETE = operationSteps.indexOf('CYCLE_COMPLETE'); //---------- 9
const ORDER_FAILED = operationSteps.indexOf('ORDER_FAILED'); // ------------- 10
const NOT_USED = -100;

export const stateSteps: stepDisplay[] = [
  {
    // STEP 0
    currentState: 'Scan Order',
    activeState: 'Scanning Order',
    alarmState: 'Scan Order Failed',
    currentOn: [IDLE_SCAN_ORDER],
    activeOn: [SCANNING_ORDER],
    passedOn: [
      VALIDATE_EMPTY,
      RUNNING,
      MEASURING,
      RESISTANCE_PASS,
      REMOVE_PART,
      PART_DISCOUNT,
      CYCLE_COMPLETE,
      RESISTANCE_NOT_PASS
    ],
    alarmOn: [ORDER_FAILED]
  },
  {
    // STEP 1
    currentState: 'Free Meter',
    activeState: 'Free Meter',
    alarmState: 'Meter Busy',
    currentOn: [NOT_USED], // Not Current
    activeOn: [VALIDATE_EMPTY],
    passedOn: [
      RUNNING,
      MEASURING,
      RESISTANCE_PASS,
      REMOVE_PART,
      PART_DISCOUNT,
      CYCLE_COMPLETE,
      RESISTANCE_NOT_PASS
    ],
    alarmOn: [NOT_USED] // Not Alarm
  },
  {
    // STEP 2
    currentState: 'Resistance Measure',
    activeState: 'Measuring Part',
    alarmState: 'Resistance NOK',
    currentOn: [RUNNING],
    activeOn: [MEASURING],
    passedOn: [RESISTANCE_PASS, REMOVE_PART, PART_DISCOUNT, CYCLE_COMPLETE],
    alarmOn: [RESISTANCE_NOT_PASS] // Not Alarm
  },
  {
    // STEP 3
    currentState: 'Remove Part',
    activeState: 'Remove Part',
    alarmState: '-',
    currentOn: [NOT_USED], //WEIGHT_PASS], // Not Current
    activeOn: [REMOVE_PART],
    passedOn: [PART_DISCOUNT, CYCLE_COMPLETE],
    alarmOn: [NOT_USED] // Not Alarm
  },
  {
    // STEP 4
    currentState: 'Assembly Complete',
    activeState: 'Discount Qty',
    alarmState: '-',
    currentOn: [11],
    activeOn: [PART_DISCOUNT],
    passedOn: [CYCLE_COMPLETE],
    alarmOn: [NOT_USED] // Not Alarm
  }
];
