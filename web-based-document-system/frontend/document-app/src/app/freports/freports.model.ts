export interface financial {

    _id:string;
    departmentname:string;
    period: string;
    incomeSection:string;
    incomeDate: string;
    totalIncome:string;
    expenditureSection:string;
    expenditureDate:string;
    totalExpenditure: string;
   
    dateuploaded: string;
    commentbox:string;
    
  IncidentPicture?:string;
  productImage:[];

version: number;
lastEditedBy?: string;

  }