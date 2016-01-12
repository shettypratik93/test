    function dropdownlist(listindex) {

        document.reg.subcategory.options.length = 0;
        switch (listindex) {

            case "Maharashtra":
                document.reg.subcategory.options[0] = new Option("Mumbai", "");
                document.reg.subcategory.options[1] = new Option("Pune", "");
                document.reg.subcategory.options[2] = new Option("Satara", "");

                break;

            case "Gujarat":
                document.reg.subcategory.options[0] = new Option("Ahmedabad", "");
                document.reg.subcategory.options[1] = new Option("Gandhinagar", "");
                document.reg.subcategory.options[2] = new Option("Baroda", "");

                break;

            case "Karnataka":
                document.reg.subcategory.options[0] = new Option("Udupi", "");
                document.reg.subcategory.options[1] = new Option("Banagalore", "");
                document.reg.subcategory.options[2] = new Option("Karkala", "");

                break;

        }
        return true;
    };
