import express from 'express';
import fs from 'fs';
import { contactData } from '../Controls/cont.js';
import {insert, selectAll } from '../Controls/data.js';
import { enrolledUsers } from '../Controls/enrolls.js';
import { myData, singleData } from '../Controls/personData.js';
import { getData, saveData } from '../Controls/register.js';
const router = express.Router()

router.get('/get-all' , selectAll)
router.post('/insert' , insert)
router.post('/contact' , contactData)
router.post('/register/save' , saveData)
router.get('/register/get-all' , getData)
router.get('/qacle/get' , singleData)
router.post('/qacle/save' ,myData )
router.post('/enroll/save' ,enrolledUsers )
export default router