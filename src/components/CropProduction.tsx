import React, { useEffect, useState } from 'react';
import { argData } from '../utils/UpdatedArgData';
import "./CropProduction.scss"

export interface CropData {
    Country: string;
    Year: string;
    CropName: string;
    CropProduction: number;
    YieldOfCrops: number;
    AreaUnderCultivation: number;
}
export interface CropProductionResult {
    year: string;
    cropMax: string;
    cropMin: string;
}

export const CropProduction : React.FC = () => {
    const [tableData, setTableData] = useState<CropProductionResult[]>([]);
    const headerList = ['Year', 'MinProduction', 'MaxProduction'];
    const tableDataLen = tableData.length;

    const findCropProductionExtremes = (data: CropData[]): CropProductionResult[] => {
        const result: CropProductionResult[] = [];
        const yearMap: { [key: string]: { max: CropData; min: CropData } } = {};
    
        data.forEach((entry) => {
            const year = entry.Year;
            const production = entry.CropProduction;
    
            if (!yearMap[year]) {
                yearMap[year] = { max: entry, min: entry };
            } else {
                if (production > yearMap[year].max.CropProduction) {
                    yearMap[year].max = entry;
                }
                if (production < yearMap[year].min.CropProduction) {
                    yearMap[year].min = entry;
                }
            }
        });
    
        for (const year in yearMap) {
            result.push({
                year,
                cropMax: yearMap[year].max.CropName,
                cropMin: yearMap[year].min.CropName,
            });
        }
    
        return result;
    }
    
    useEffect(() => {
      const data = findCropProductionExtremes(argData)
      setTableData(data);
    }, []);

    const renderTableRows = () => {
        return tableData.map(item => {
            const year = item.year.split(',')[1];
            return (
                <div className='result-table-row'>
                    <div className='result-table-row--Year'>{year}</div>
                    <div className='result-table-row--MinProduction'>{item.cropMax}</div>
                    <div className='result-table-row--MaxProduction'>{item.cropMin}</div>
               
                </div>
            );
        });
    }
    return (
        <div className="result-table">
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
