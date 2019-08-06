import Vue from 'vue';
import { expect } from 'chai';
import { initVM } from './utils.js';
import Datepicker from '../src/Datepicker.vue';

describe('Datepicker', () => {
  it('has a created hook', () => {
    expect(typeof Datepicker.created).to.equal('function');
  });

  it('initialises with default data', () => {
    expect(typeof Datepicker.data).to.equal('function');

    const data = Datepicker.data();

    expect(data.view).to.equal('calendar');
    expect(data.isOpen).to.be.false;
    expect(data.date).to.be.null;
  });

  it('sets dateInput when created', () => {
    const vm = initVM(Datepicker, {
      value: '2017-02-01'
    });

    expect(vm.dateInput).to.equal('2017-02-01');
  });

  it('should select all days in a month', () => {
    const vm = initVM(Datepicker);

    const days = vm.daysInMonth(1, 2017);

    expect(days).to.be.an('array');
    expect(days.length).to.equal(28);
    expect(days[0]).to.be.a('date');
  });

  it('should select all past days until it reaches first day of the week', () => {
    const vm = initVM(Datepicker);

    const pastDays = vm.pastDays(vm.daysInMonth(1, 2017));

    expect(pastDays).to.be.an('array');
    expect(pastDays.length).to.equal(3);
    expect(pastDays[0].getDay()).to.equal(0); // Sunday
  });

  it('should select all future days until it reaches last day of the week', () => {
    const vm = initVM(Datepicker);

    const futureDays = vm.futureDays(vm.daysInMonth(1, 2017));

    expect(futureDays).to.be.an('array');
    expect(futureDays.length).to.equal(4);
    expect(futureDays[futureDays.length - 1].getDay()).to.equal(6); // Saturday
  });

  it('should format date', () => {
    const vm = initVM(Datepicker);

    vm.mode = 'datetime';

    const date = new Date(2017, 1, 1, 12, 10, 10);

    expect(vm.formatDate(date)).to.equal('2017-02-01');
    expect(vm.formatTime(date)).to.equal('12:10');
    expect(vm.formatDateTime(date)).to.equal('2017-02-01 12:10');
  });

  it('should recognise a date within current month', () => {
    const vm = initVM(Datepicker);

    vm.month = 1;
    vm.year = 2017;

    const date1 = new Date(2017, 1, 1, 12, 10, 10);
    const date2 = new Date(2017, 5, 1, 12, 10, 10);

    expect(vm.isWithinCurrentMonth(date1)).to.be.true;
    expect(vm.isWithinCurrentMonth(date2)).to.be.false;
  });

  it('should validate date format', () => {
    const vm = initVM(Datepicker);

    const date1 = '2017-02-21';
    const date2 = '2017-02-21 12:10';
    const date3 = '2017/02/21 12.10';

    expect(vm.validFormat(date1)).to.be.true;
    expect(vm.validFormat(date2)).to.be.true;
    expect(vm.validFormat(date3)).to.be.false;
  });

  it('should parse date', () => {
    const vm = initVM(Datepicker);

    const parsedDate = vm.parseDate('2017-02-21');

    expect(parsedDate).to.be.a('date');

    expect(parsedDate.getFullYear()).to.equal(2017);
    expect(parsedDate.getMonth()).to.equal(1);
    expect(parsedDate.getDate()).to.equal(21);
  });

  it('should pad a value', () => {
    const vm = initVM(Datepicker);

    const paddedValue = vm.pad(1);

    expect(paddedValue).to.equal('01');
  });

  it('should detect today', () => {
    const vm = initVM(Datepicker, {
      value: '2019-08-01'
    });

    expect(vm.isToday(new Date(2012, 10, 1))).to.equal(false);
    expect(vm.isToday(new Date())).to.equal(true);
  });

  it('should flush the input', () => {
    const vm = initVM(Datepicker, {
      value: '2019-08-01'
    });

    vm.flushDateInput();

    expect(vm.dateInput).to.equal('');
  });

  it('formats date', () => {
    const vm = initVM(Datepicker, {
      value: '2019-08-01 14:05'
    });

    expect(vm.formatDate(vm.date)).to.equal('2019-08-01');
  });

  it('formats time', () => {
    const vm = initVM(Datepicker, {
      value: '2019-08-01 14:05'
    });

    expect(vm.formatTime(vm.date)).to.equal('14:05');
  });

  it('set hour', () => {
    const vm = initVM(Datepicker, {
      value: '2019-08-01 14:30',
      mode: 'datetime'
    });

    vm.setHour('08');

    expect(vm.dateInput).to.equal('2019-08-01 08:30');
  });

  it('set minutes', () => {
    const vm = initVM(Datepicker, {
      value: '2019-08-01 14:30',
      mode: 'datetime'
    });

    vm.setMinutes('05');

    expect(vm.dateInput).to.equal('2019-08-01 14:05');
  });
});
