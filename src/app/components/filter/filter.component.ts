import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  standalone: false,

  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  filterOptions: IFilterOptions = {
    name: '',
    startDate: '',
    endDate: '',
    status: undefined,
  };

  onDateChange(event: { start: string; end: string }) {
    this.filterOptions.startDate = event.start;
    this.filterOptions.endDate = event.end;
  }

  onStatusChange(status: any) {
    this.filterOptions.status = status === 1;
  }


  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>();

  onFilter() {
    this.onFilterEmitt.emit(this.filterOptions);
  }
}
