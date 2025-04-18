import { DoctorNameFilterPipe } from './doctor-name-filter.pipe';

describe('DoctorNameFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new DoctorNameFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
