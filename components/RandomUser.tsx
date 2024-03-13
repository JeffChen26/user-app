"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
  registered: {
    date: string;
  };
}

export default function RandomUser() {
  const [User, setUser] = useState<User>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUser(data.results[0]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  if (User)
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>
            <div>
              <img src={User.picture.large} alt="user image" />
            </div>
            <div className="flex flex-col space-y-1.0">
              {User.name.first} {User.name.last}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                Email: {User.email}
              </div>
              <div className="flex flex-col space-y-1.5">
                Phone no.: {User.phone}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">More Info</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  {User.name.first} {User.name.last}
                </DialogTitle>
                <DialogDescription>
                  <div className="flex flex-col space-y-1.5">
                    Registered on {User.registered.date}
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    );
}
