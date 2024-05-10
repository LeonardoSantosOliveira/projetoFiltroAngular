import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filtro-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  }

  statusList = [
    {
      value: true,
      viewValue: 'Ativo'
    },
    {
      value: false,
      viewValue: 'Inativo'
    },
    {
      value: undefined,
      viewValue: 'Ambos'
    }
  ]

  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>()

  onFilter() {
    this.onFilterEmitt.emit(this.filterOptions);
  }
}
