import { IMessageWithSuccess } from './../services/services.d';
import { IParams } from './routes.d';
import { Request, Response } from 'express'
import NoteEntity from '../entity/Note.entity'
import express from "express";
import NoteService from "../services/Note.service";
import { INoteCreate } from './routes';
const router = express.Router();

// router.post("/create", async (req: Request, res: Response) => {
//   // http://localhost/wilder/create
//   const { label }: INoteCreate = req.body;
//   try {
//     const note: NoteEntity = await new NoteService().createLanguage({
//       label,
//     });

//     res.json(note);
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// });

router.get("/list", async (req: Request, res: Response) => {
  try {
    const noteList: NoteEntity[] = await new NoteService().list();
    res.json(noteList);
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
router.get("/find/:id", async (req: Request, res: Response) => {
  const { id }: IParams = req.params;
  try {
    const note: NoteEntity = await new NoteService().findById(id);
    res.json(note);
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
router.delete("/delete/:id", async (req: Request, res: Response) => {
  const { id }: IParams = req.params;
  try {
    const result: IMessageWithSuccess = await new NoteService().delete(id);
    res.json(result);
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
// router.patch("/update/:id", async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { label } = req.body;

//   try {
//     const note = await new NoteService().update({
//       id,
//       label,
//     });
//     res.json(note);
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// });

export default router;