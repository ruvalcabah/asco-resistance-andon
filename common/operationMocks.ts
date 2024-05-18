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
  'IDLE_SCAN_ORDER', // 0 - (Scan Order) Cycle Complete && Qty == 0)
  'SCANNING_ORDER', //- 1 - Scan Order
  'VALIDATE_EMPTY', //- 2 - Order Scanned OK
  'SCAN_PART', // ----- 3 - Part Not In Scale || (Cycle Complete && Qty > 0)
  'SCANNING_PART', // - 4 - Part Scanned
  'RUNNING', // ------- 5 - Part Scanned OK - ^ Part NOT In Scale
  'WEIGHTING', // ----- 6 - Part In Scale - ^ Part Weight NOK
  'WEIGHT_PASS', // --- 7 - Part Weight OK
  'REMOVE_CARTON', //-- 8 - Part Weight OK (Pass Time Filter)
  'CARTON_REMOVED', //- 9 - Part Not In Scale
  'PART_DISCOUNT', //- 10 - Part Not In Scale (Pass Time Filter)
  'CYCLE_COMPLETE', // 11 - Part Discounted (Pass Time Filter)
  'ORDER_FAILED', // - 12 - Order Scanned FAIL (From Step 1)
  'PART_FAILED' // --- 13 - Part Scanned FAIL (From Step 4)
];

const IDLE_SCAN_ORDER = operationSteps.indexOf('IDLE_SCAN_ORDER'); // 1
const SCANNING_ORDER = operationSteps.indexOf('SCANNING_ORDER'); // - 2
const VALIDATE_EMPTY = operationSteps.indexOf('VALIDATE_EMPTY'); // - 3
const SCAN_PART = operationSteps.indexOf('SCAN_PART'); // ----------- 4
const SCANNING_PART = operationSteps.indexOf('SCANNING_PART'); // --- 5
const RUNNING = operationSteps.indexOf('RUNNING'); // --------------- 6
const WEIGHTING = operationSteps.indexOf('WEIGHTING'); // ----------- 7
const WEIGHT_PASS = operationSteps.indexOf('WEIGHT_PASS'); // ------- 8
const REMOVE_CARTON = operationSteps.indexOf('REMOVE_CARTON'); // --- 9
const CARTON_REMOVED = operationSteps.indexOf('CARTON_REMOVED'); //-- 10
const PART_DISCOUNT = operationSteps.indexOf('PART_DISCOUNT'); // --- 11
const CYCLE_COMPLETE = operationSteps.indexOf('CYCLE_COMPLETE'); //-- 12
const ORDER_FAILED = operationSteps.indexOf('ORDER_FAILED'); // ----- 13
const PART_FAILED = operationSteps.indexOf('PART_FAILED'); // ------- 14
const NOT_USED = -100;

export const stateSteps: stepDisplay[] = [
  {
    // STEP 1
    currentState: 'Scan Order',
    activeState: 'Scanning Order',
    alarmState: 'Scan Order Failed',
    currentOn: [IDLE_SCAN_ORDER],
    activeOn: [SCANNING_ORDER],
    passedOn: [
      VALIDATE_EMPTY,
      SCAN_PART,
      SCANNING_PART,
      RUNNING,
      WEIGHTING,
      WEIGHT_PASS,
      REMOVE_CARTON,
      CARTON_REMOVED,
      PART_DISCOUNT,
      CYCLE_COMPLETE,
      PART_FAILED
    ],
    alarmOn: [ORDER_FAILED]
  },
  {
    // STEP 1
    currentState: 'Scan Carton',
    activeState: 'Scanning Order',
    alarmState: 'Scan Order Failed',
    currentOn: [SCANNING_ORDER],
    activeOn: [SCANNING_ORDER],
    passedOn: [
      VALIDATE_EMPTY,
      SCAN_PART,
      SCANNING_PART,
      RUNNING,
      WEIGHTING,
      WEIGHT_PASS,
      REMOVE_CARTON,
      CARTON_REMOVED,
      PART_DISCOUNT,
      CYCLE_COMPLETE,
      PART_FAILED
    ],
    alarmOn: [ORDER_FAILED]
  },
  {
    // STEP 2
    currentState: 'Free Scale',
    activeState: 'Free Scale',
    alarmState: 'Scale Busy',
    currentOn: [NOT_USED], // Not Current
    activeOn: [VALIDATE_EMPTY],
    passedOn: [
      SCAN_PART,
      SCANNING_PART,
      RUNNING,
      WEIGHTING,
      WEIGHT_PASS,
      REMOVE_CARTON,
      CARTON_REMOVED,
      PART_DISCOUNT,
      CYCLE_COMPLETE,
      PART_FAILED
    ],
    alarmOn: [NOT_USED] // Not Alarm
  },
  {
    // STEP 3
    currentState: 'Scan Item Number',
    activeState: 'Scanning Item Number',
    alarmState: 'Item Number Failed',
    currentOn: [SCAN_PART],
    activeOn: [SCANNING_PART],
    passedOn: [
      RUNNING,
      WEIGHTING,
      WEIGHT_PASS,
      REMOVE_CARTON,
      CARTON_REMOVED,
      PART_DISCOUNT,
      CYCLE_COMPLETE
    ],
    alarmOn: [PART_FAILED]
  },
  {
    // STEP 4
    currentState: 'Weight Measure',
    activeState: 'Weighting Part',
    alarmState: 'Part Weight Failed',
    currentOn: [RUNNING],
    activeOn: [WEIGHTING],
    passedOn: [
      WEIGHT_PASS,
      REMOVE_CARTON,
      CARTON_REMOVED,
      PART_DISCOUNT,
      CYCLE_COMPLETE
    ],
    alarmOn: [NOT_USED] // Not Alarm
  },
  {
    // STEP 5
    currentState: 'Remove Carton',
    activeState: 'Remove Carton',
    alarmState: '-',
    currentOn: [NOT_USED], //WEIGHT_PASS], // Not Current
    activeOn: [REMOVE_CARTON],
    passedOn: [CARTON_REMOVED, PART_DISCOUNT, CYCLE_COMPLETE],
    alarmOn: [NOT_USED] // Not Alarm
  },
  {
    // STEP 6
    currentState: 'Pack Complete',
    activeState: 'Discount Quantity',
    alarmState: '-',
    currentOn: [CARTON_REMOVED],
    activeOn: [PART_DISCOUNT],
    passedOn: [CYCLE_COMPLETE],
    alarmOn: [NOT_USED] // Not Alarm
  }
];
