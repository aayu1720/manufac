import React, { useEffect, useState } from 'react';
import { CropData } from './CropProduction';
import { argData } from '../utils/UpdatedArgData';
import "./YieldandCultivation.scss"


export type CropAverage = {
    crop: string;
    averageYield: number;
    averageCultivationArea: number;
  };

export const YieldandCultivation : React.FC = () => {
    const [tableData, setTableData] = useState<CropAverage[]>([]);
    const headerList = ['Crop', 'averageYield', 'averageCultivationArea'];
    const tableDataLen = tableData.length;

    const calculateAverages = (data: CropData[]): CropAverage[] => {
        const cropMap: { [key: string]: { totalYield: number; totalArea: number; count: number } } = {};
      
        data.forEach(entry => {
          const { CropName, YieldOfCrops, AreaUnderCultivation } = entry;
          if (!cropMap[CropName]) {
            cropMap[CropName] = { totalYield: 0, totalArea: 0, count: 0 };
          }
          cropMap[CropName].totalYield += YieldOfCrops;
          cropMap[CropName].totalArea += AreaUnderCultivation;
          cropMap[CropName].count += 1;
        });
      
        return Object.keys(cropMap).map(crop => {
          const { totalYield, totalArea, count } = cropMap[crop];
          return {
            crop,
            averageYield: totalYield / count,
            averageCultivationArea: totalArea / count,
          };
        });
      }
    
    useEffect(() => {
      const data = calculateAverages(argData)
      setTableData(data);
    }, []);

    const renderTableRows = () => {
        return tableData.map(item => {
            return (
                <div className='result-table-row'>
                    <div className='result-table-row--crop'>{item.crop}</div>
                    <div className='result-table-row--averageYield'>{parseFloat(item.averageYield.toFixed(3))}</div>
                    <div className='result-table-row--averageCultivationArea'>{parseFloat(item.averageCultivationArea.toFixed(3))}</div>
               
                </div>
            );
        });
    }
    return (
        <div className="result-table2">
            <div className="result-table__header">
                {headerList.map((header, index) =>
                    <div className={`result-table__header--${header}`} key={index}>
                        {header}
                    </div>
                )}
            </div>
            {tableDataLen && <div className="result-table__body">{renderTableRows()}</div>}
        </div>
    );
}


 
  
 