/*
    Solving the facebook like button issues

    Making and Discussing A Simple Viber Button Using Use State

    Now, Discussion about forms
        There are forms most often in all websites

    Client Side Validation: email format not match, weak password
    Server Side Validation: password not match, password changed already

    How to find whether an emall is valid or not?

        const email = 'fdagh@gmail.com'
        if(email.includes('@) && email.includes('.')){
            console.log('valid)
        }else{
            console.log('invalid)
        }

        What if '@' is at the end?  -> Is ajitgmail@ valid?
        What if @gmail is at the end? -> Is ajit.com@gmail is valid?

        Regular Expression can also be used...

        For Client Validation: Formik & Yup
            Formik for Dvance Handling forms 
            Yup for Form Validation (or to handle advance form actions)
            
            Alternatives of Formik: Joi, zod

          const formik = useFormik({
                initialValues: {
                firstName: 'Ajit',
                lastName: '',
                email: '',
            },
                onSubmit: values => {
                alert(JSON.stringify(values, null, 2)); -> alert doesnot shows object so is changed in JSON
            },
        }

    Using Formik Yup for Client Side Validation



    







*/