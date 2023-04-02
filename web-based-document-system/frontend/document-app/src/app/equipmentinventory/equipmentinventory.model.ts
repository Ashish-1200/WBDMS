export interface equipmodel {

    _id:string;
    DepartmentName:string;
    Project: string;
    DateOfProject:string;
    EquipmentDescription: string;
    SerialNo:number;
    DateAcquired:string;
    CostOfEquipment:string;

    description:string;
    dateuploaded: string;
    commentbox:string;
    
    allMedia?:string;
    mediaFiles:[];

version: number;
//lastEditedBy?: string;

  }
  