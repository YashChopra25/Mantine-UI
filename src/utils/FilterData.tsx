import JsonData from "./../../assets/data.json"

export const CropMaximumProductinBasesOnYear = () => {
    try {
        const production: any = {}

        JsonData.forEach((data) => {
            const DataYear = (data.Year.split(",")[1].trim())
            if (!production[DataYear]) {
                production[DataYear] = { maximum_production: data["Crop Production (UOM:t(Tonnes))"], minimum_production: data["Crop Production (UOM:t(Tonnes))"], maximumCropName: data["Crop Name"], minimumCropName: data["Crop Name"] }
            }
            else {

                if (data["Crop Production (UOM:t(Tonnes))"] > production[DataYear].maximum_production) {
                    production[DataYear].maximum_production = (data["Crop Production (UOM:t(Tonnes))"] ? data["Crop Production (UOM:t(Tonnes))"] : 0)
                    production[DataYear].maximumCropName = data["Crop Name"]

                }
                if (production[DataYear].minimum_production > data["Crop Production (UOM:t(Tonnes))"]) {
                    production[DataYear].minimumCropName = data["Crop Name"]
                    production[DataYear].minimum_production = (data["Crop Production (UOM:t(Tonnes))"] ? data["Crop Production (UOM:t(Tonnes))"] : 0)

                }
            }
        })

        return Object.keys(production).map((key) => { return { col1: key, maximum: production[key].maximum_production, minimum: production[key].minimum_production, col2: production[key].maximumCropName, col3: production[key].minimumCropName } })
    } catch (error) {
        return null
    }
}

export const CropAverageData = () => {
    try {
        const AverageData: any = {}
        JsonData.map((data) => {
            const CropName = data["Crop Name"]
            const yieldValue = parseFloat(data['Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))'] as string) || 0;
            const areaValue = parseFloat(data['Area Under Cultivation (UOM:Ha(Hectares))'] as string) || 0;
            if (!AverageData[CropName]) {
                AverageData[CropName] = { Totalyield: yieldValue, TotalCultivateArea: areaValue, count: 1 }
            }
            else {
                AverageData[data["Crop Name"]].Totalyield += yieldValue;
                AverageData[data["Crop Name"]].TotalCultivateArea += areaValue
                AverageData[data["Crop Name"]].count++
            }
        })
        return Object.keys(AverageData).map((key) => {
            const averageyield = AverageData[key].Totalyield / AverageData[key].count;
            const averagearea = AverageData[key].TotalCultivateArea / AverageData[key].count;
            return {
                col1: key, //CropName
                Totalyield: AverageData[key].Totalyield,
                TotalCultivateArea: AverageData[key].TotalCultivateArea,
                count: AverageData[key].count,
                col2: averageyield.toFixed(3), //Average of Yield of particular Year
                col3: averagearea.toFixed(3)//Average of cultivatedArea of particular Year
            }
        })
    } catch (error) {
        return null
    }
}