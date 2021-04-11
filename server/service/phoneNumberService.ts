import {Response, Request} from "express"
import {NumbersResponse, PhoneNumber} from "../types/PhoneNumber";
import PhoneNumberDao from "../models/PhoneNumber";

const getNumbers = async (req: Request, res: Response): Promise<void> => {
    console.log("Getting Numbers")
    try {
        const numbers: PhoneNumber[] = await PhoneNumberDao.find();
        res.status(200).json({numbers: numbers} as NumbersResponse)
    } catch (error) {
        res.status(500).json({message: "Could not get numbers", error: error.toString()})
    }
}

const addNumber = async (req: Request, res: Response): Promise<void> => {
    console.log("Creating Number")
    try {
        const {name, description, number} = req.body as Pick<PhoneNumber, "name" | "description" | "number">

        const newRecord: PhoneNumber = new PhoneNumberDao({
            name,
            description,
            number
        });

        await newRecord.save();
        const allRecords: PhoneNumber[] = await PhoneNumberDao.find()

        res.status(201).json({message: "Record Added", numbers: allRecords});

    } catch (e) {
        res.status(500).json({message: "Could not create new phone number record", error: e.toString()})
    }
}

const updateNumber = async (req: Request, res: Response): Promise<void> => {
    console.log(`editing record with id ${req.params.id}`)
    try {
        const updateRecord: PhoneNumber | null = await PhoneNumberDao.findByIdAndUpdate({_id: req.params.id}, req.body);
        const allRecords: PhoneNumber[] = await PhoneNumberDao.find()
        if (updateRecord) {
            res.status(200).json({
                message: "Number Successfully Updated!",
                number: updateRecord,
                numbers: allRecords
            })
        } else {
            res.status(304).json({message: `Could not find phone number record ${req.params.id}`, numbers: allRecords})
        }

    } catch (e) {
        res.status(500).json({message: `Could not edit phone number record ${req.params.id}`, error: e.toString()})
    }
}

const deleteNumber = async (req: Request, res: Response): Promise<void> => {
    console.log(`Deleting Record ${req.params.id}`)
    try {
        const deletedRecord: PhoneNumber | null = await PhoneNumberDao.findByIdAndRemove(req.params.id);
        const allRecords = await PhoneNumberDao.find();

        if (deletedRecord) {
            res.status(200).json({
                message: `Record with id ${req.params.id} deleted successfully`,
                number: deletedRecord,
                numbers: allRecords
            })
        } else {
            res.status(304).json({message: `Could not find phone number record ${req.params.id}`, numbers: allRecords})
        }

    } catch (e) {
        res.status(500).json({message: `Error deleting item with Id ${req.params.id}`, error: e.toString()})
    }
}


export {getNumbers, addNumber, deleteNumber, updateNumber}